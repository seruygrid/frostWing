'use client';
import PropTypes from 'prop-types';

// @mui
import {useTheme} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import {motion} from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import {GraphicsCard} from '@/components/cards';

import {SECTION_COMMON_PY} from '@/utils/constant';

// @assets

/***************************  CALL TO ACTION - 5  ***************************/

function Typeset({heading, caption, stackProps, headingProps, captionProps}) {
  const {sx, ...rest} = stackProps || {};

  return (
    <Stack {...rest} sx={{gap: {xs: 1, sm: 1.5}, ...sx}}>
      {caption && (
        <Typography
          component="p"
          variant="h6"
          {...captionProps}
          sx={{color: 'text.secondary', ...(captionProps?.sx && {...captionProps.sx})}}
        >
          {caption}
          <Stack {...rest} sx={{gap: {xs: 1, sm: 1.5}, ...sx}}>
            <Typography
              component="p"
              variant="h6"
              {...captionProps}
              sx={{color: 'text.secondary', ...(captionProps?.sx && {...captionProps.sx})}}
            >
              Email: <a
              href="mailto:office@frostwind.at"
              style={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              office@frostwind.at
            </a>
              <br/>
              Telefon: <a
              href="tel:+436765216962"
              style={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              +436765216962
            </a>
            </Typography>
          </Stack>
        </Typography>
      )}
    </Stack>
  );
}

Typeset.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  stackProps: PropTypes.any,
  headingProps: PropTypes.any,
  captionProps: PropTypes.any
};


export default function Cta5({
                               heading,
                               caption,
                               label,
                               input = false,
                               primaryBtn,
                               description,
                               saleData,
                               profileGroups
                             }) {
  const theme = useTheme();

  return (
    <ContainerWrapper sx={{py: SECTION_COMMON_PY}}>
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{
          duration: 0.5,
          delay: 0.4
        }}
      >
        <Grid container spacing={1.5}>
          <Grid size={{xs: 12, sm: 12, md: 12}}>
            <GraphicsCard sx={{position: 'relative'}}>
              <Stack
                sx={{
                  alignItems: 'flex-start',
                  gap: {xs: 5.75, sm: 10},
                  p: {xs: 3, sm: 4, md: 8},
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <Stack sx={{gap: 5}}>
                  <Stack direction="row" sx={{alignItems: 'center', gap: 1}}>
                    <Chip
                      label={
                        <Typography variant="caption" sx={{color: 'secondary.main'}}>
                          Oder kontaktieren Sie uns einfach
                        </Typography>
                      }
                      variant="outlined"
                      sx={{borderColor: 'grey.600', '& .MuiChip-label': {py: 0.75, px: 2}}}
                    />
                    <Divider sx={{width: 63, borderBottomWidth: 2}}/>
                  </Stack>

                  <Typeset {...{heading, caption, captionProps: {sx: {maxWidth: 478}}}} />
                </Stack>
              </Stack>
            </GraphicsCard>
          </Grid>
        </Grid>
      </motion.div>
    </ContainerWrapper>
  );
}

Cta5.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.oneOfType([PropTypes.any, PropTypes.bool]),
  primaryBtn: PropTypes.any,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  saleData: PropTypes.any,
  profileGroups: PropTypes.object
};
