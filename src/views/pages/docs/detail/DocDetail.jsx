import MainCard from '../../../../ui-component/cards/MainCard';
import { Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateDoc, deleteDoc, getDocDetail } from '../store/DocsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router-dom';
import { ShowError, ShowSuccess } from '../../../../components/HelmAlert';

function DocDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeParams = useParams();

    const doc = useSelector((state) => state.pages.doc);
    const docId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);

    const [noDoc, setNoDoc] = useState(false);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState('');

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });

    const {
        control,
        reset,
        trigger,
        getValues,
        formState: { errors }
    } = methods;

    useEffect(() => reset(doc), [doc, reset]);

    useEffect(() => {
        setLoading(true);
        if (docId) {
            dispatch(getDocDetail(docId)).then((action) => {
                setLoading(false);
                if (!action.payload) {
                    setNoDoc(true);
                }
            });
        } else {
            setLoading(false);
        }
    }, [docId, dispatch]);

    const deleteHandler = useCallback(() => {
        dispatch(deleteDoc(docId)).then(({ payload }) => {
            if (!payload) {
                setSuccess(false);
            } else {
                setSuccess(true);
                navigate('/docs');
            }
        });
    }, [dispatch, docId, navigate]);

    const saveHandler = useCallback(async () => {
        await trigger().then((check) => {
            if (!check) {
                setSuccess(false);
            }
            dispatch(createOrUpdateDoc({ data: getValues(), id: docId })).then(({ payload }) => {
                if (!payload) {
                    setSuccess(false);
                } else {
                    setSuccess(true);
                    if (!docId) {
                        navigate(`/docs/${payload.id}`);
                    }
                }
            });
        });
    }, [dispatch, docId, getValues, navigate, trigger]);

    if (noDoc) {
        return (
            <MainCard>
                <Typography sx={{ marginBottom: '20px' }}>Клиент не найден</Typography>
                <Button sx={{ padding: 0 }} onClick={() => navigate(-1)}>
                    Вернуться назад
                </Button>
            </MainCard>
        );
    }

    const getTitle = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Детальная страница клиента</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <AnimateButton>
                        <Button disableElevation size="medium" type="submit" variant="contained" color="secondary" onClick={saveHandler}>
                            {docId ? 'Обновить' : 'Сохранить'}
                        </Button>
                    </AnimateButton>
                    {docId && (
                        <AnimateButton>
                            <Button
                                disableElevation
                                size="medium"
                                type="submit"
                                variant="contained"
                                color="warning"
                                onClick={deleteHandler}
                            >
                                Удалить
                            </Button>
                        </AnimateButton>
                    )}
                </div>
            </div>
        );
    };

    return (
        <MainCard title={getTitle()}>
            {!loading ? (
                <FormProvider {...methods}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="space-between">
                        <Grid item xs={12}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Имя"
                                        id="name"
                                        type="text"
                                        fullWidth
                                        required
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                name="last_name"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Фамилия"
                                        id="last_name"
                                        type="text"
                                        fullWidth
                                        required
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Телефон"
                                        id="phone"
                                        type="text"
                                        fullWidth
                                        required
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </FormProvider>
            ) : (
                <HelmLoading />
            )}

            <Snackbar open={success !== ''} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                {success ? ShowSuccess() : ShowError()}
            </Snackbar>
        </MainCard>
    );
}

export default DocDetail;
