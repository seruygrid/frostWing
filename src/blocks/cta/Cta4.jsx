'use client';
import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup } from '@/components/cards/profile-card';
import SvgIcon from '@/components/SvgIcon';

import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Arrow from '@/images/graphics/Arrow';

/***************************  CALL TO ACTION - 4  ***************************/

export default function Cta4({ headLine, primaryBtn, profileGroups, list, clientContent }) {
  const transformValues = { xs: 'rotate(45deg)', sm: 'rotate(320deg)', md: 'unset' };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.3
        }}
      >
        <GraphicsCard>
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Grid container spacing={{ xs: 5, sm: 0, md: 3 }} sx={{ alignItems: 'flex-end' }}>
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Stack sx={{ gap: 5 }}>
                  <Stack sx={{ gap: { xs: 2, sm: 5 } }}>
                    {typeof headLine === 'string' ? <Typography variant="h2">{headLine}</Typography> : headLine}
                    {list && (
                      <Stack direction={{ sm: 'row' }} sx={{ columnGap: { xs: 1, sm: 3 }, rowGap: 1, flexWrap: 'wrap' }}>
                        {list.map((item, index) => (
                          <Stack key={index} direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                            <SvgIcon name="tabler-rosette-discount-check" color="text.secondary" stroke={1} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {item.primary}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}

Cta4.propTypes = {
  headLine: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  primaryBtn: PropTypes.any,
  profileGroups: PropTypes.object,
  list: PropTypes.array,
  clientContent: PropTypes.string
};
