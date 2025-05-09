'use client';
import PropTypes from 'prop-types';

import {useState} from 'react';

// @mui
import {useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import {Controller, useForm} from 'react-hook-form';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import SvgIcon from '@/components/SvgIcon';

import countries from '@/data/countries';
import {emailSchema, firstNameSchema, lastNameSchema, phoneSchema} from '@/utils/validationSchema';
import Airtable from "airtable";

// @types

/***************************  FORM - INPUT LABEL  ***************************/

Airtable.configure({
  apiKey: 'patgCOzXDiYuj90Zr.feb51ffc520816b0ecf453d1f0ad594049fac2d9dd21e010150554ade96e62cd',
})


function FieldLabel({name}) {
  return (
    <Typography variant="subtitle1" sx={{color: 'text.secondary'}}>
      {name}
    </Typography>
  );
}

/***************************  FORM - ERROR MESSAGE  ***************************/

function ErrorMessage({message}) {
  return (
    <Typography variant="caption" sx={{color: 'error.main'}}>
      {message}
    </Typography>
  );
}

/***************************  CONTACT US - FORM 2  ***************************/

export default function ContactUsForm2() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'dialcode-popper' : undefined;

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: {errors},
    setValue
  } = useForm({defaultValues: {dialcode: '+43'}});


  const onSubmit = async (data) => {
    const base = Airtable.base('appDEeHaQkjenQ3Jf');
    base.table('FrostWing').create([
      {
        fields: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: `${data.dialcode}${data.phone}`,
          message: data.message
        },
      },
    ]).then(() => {
      reset()
    }).catch((error) => {
      console.error('Error creating record:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{gap: {xs: 3, sm: 4}}}>
        <Grid container spacing={2.5} sx={{justifyContent: 'space-between'}}>
          <Grid size={{xs: 12, sm: 6}}>
            <Stack sx={{gap: 0.5}}>
              <FieldLabel name="Vorname"/>
              <OutlinedInput
                {...register('firstName', firstNameSchema)}
                placeholder="Vorname"
                slotProps={{input: {'aria-label': 'Vorname'}}}
                fullWidth
                error={errors.firstName && Boolean(errors.firstName)}
              />
              {errors.firstName?.message && <ErrorMessage message={errors.firstName?.message}/>}
            </Stack>
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <Stack sx={{gap: 0.5}}>
              <FieldLabel name="Nachname"/>
              <OutlinedInput
                {...register('lastName', lastNameSchema)}
                placeholder="Nachname"
                slotProps={{input: {'aria-label': 'Nachname'}}}
                fullWidth
                error={errors.lastName && Boolean(errors.lastName)}
              />
              {errors.lastName?.message && <ErrorMessage message={errors.lastName?.message}/>}
            </Stack>
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <Stack sx={{gap: 0.5}}>
              <FieldLabel name="Email"/>
              <OutlinedInput
                {...register('email', emailSchema)}
                placeholder="example@gmail.com"
                slotProps={{input: {'aria-label': 'Email'}}}
                fullWidth
                error={errors.email && Boolean(errors.email)}
              />
              {errors.email?.message && <ErrorMessage message={errors.email?.message}/>}
            </Stack>
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <Stack sx={{gap: 0.5}}>
              <FieldLabel name="Telefonnummer"/>
              <Controller
                control={control}
                name="phone"
                rules={phoneSchema}
                render={({field: {onChange}}) => (
                  <OutlinedInput
                    placeholder="Telefonnummer"
                    slotProps={{input: {'aria-label': 'Telefonnummer'}}}
                    fullWidth
                    error={errors.phone && Boolean(errors.phone)}
                    onChange={onChange}
                    startAdornment={
                      <Stack direction="row" sx={{gap: 1.5, alignItems: 'center', pr: 1.5}}>
                        <Button
                          endIcon={<SvgIcon name="tabler-chevron-down" size={16} color="text.primary" stroke={2}/>}
                          sx={{
                            p: {xs: 0.25},
                            borderRadius: 2,
                            color: 'text.primary',
                            '&:hover': {bgcolor: 'transparent'},
                            '&:before': {display: 'none'},
                            '& .MuiInputBase-input:focus': {bgcolor: 'transparent'},
                            width: 'max-content',
                            fontSize: 16
                          }}
                          disableRipple
                          aria-describedby={id}
                          type="button"
                          onClick={handleClick}
                        >
                          {watch('dialcode')}
                        </Button>
                        <Popper
                          placement="bottom-start"
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          transition
                          popperOptions={{
                            modifiers: [
                              {
                                name: 'offset',
                                options: {
                                  offset: [-16, 2]
                                }
                              }
                            ]
                          }}
                        >
                          {({TransitionProps}) => (
                            <Fade in={open} {...TransitionProps}>
                              <Card elevation={0}
                                    sx={{border: '1px solid', borderColor: theme.palette.divider, borderRadius: 4}}>
                                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                  <Box sx={{p: 1, pr: 0.5}}>
                                    <List disablePadding>
                                      <Box sx={{overflow: 'auto', maxHeight: 320, width: {xs: 296, sm: 320}}}>
                                        {countries.map((country, index) => (
                                          <ListItemButton
                                            key={index}
                                            sx={{borderRadius: 4, mb: 0.5}}
                                            selected={country.dialCode === watch('dialcode')}
                                            onClick={() => {
                                              setValue('dialcode', country.dialCode);
                                              setAnchorEl(null);
                                            }}
                                          >
                                            <ListItemAvatar sx={{minWidth: 32}}>
                                              <CardMedia
                                                image={`https://flagcdn.com/w20/${country.countyCode.toLowerCase()}.png`}
                                                component="img"
                                                sx={{height: 'fit-content', width: 21}}
                                                loading="lazy"
                                              />
                                            </ListItemAvatar>
                                            <ListItemText primary={`${country.name} (${country.dialCode})`}/>
                                          </ListItemButton>
                                        ))}
                                      </Box>
                                    </List>
                                  </Box>
                                </ClickAwayListener>
                              </Card>
                            </Fade>
                          )}
                        </Popper>
                        <Divider orientation="vertical" flexItem sx={{height: 24, my: 'auto'}}/>
                      </Stack>
                    }
                  />
                )}
              />
              {errors.phone?.message && <ErrorMessage message={errors.phone?.message}/>}
            </Stack>
          </Grid>
          <Grid size={12}>
            <Stack sx={{gap: 0.5}}>
              <FieldLabel name="Nachricht"/>
              <OutlinedInput
                {...register('message', {required: 'Message is required'})}
                multiline
                rows={4}
                placeholder="Bitte geben Sie hier Ihre Nachricht ein.."
                fullWidth
                error={errors.message && Boolean(errors.message)}
                slotProps={{input: {'aria-label': 'Nachricht'}}}
              />
              {errors.message?.message && <ErrorMessage message={errors.message?.message}/>}
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{textAlign: 'center'}}>
          <ButtonAnimationWrapper>
            <Button type="submit" color="primary" size="large" variant="contained">
              Nachricht senden
            </Button>
          </ButtonAnimationWrapper>
        </Box>
      </Stack>
    </form>
  );
}

FieldLabel.propTypes = {name: PropTypes.string};

ErrorMessage.propTypes = {message: PropTypes.string};
