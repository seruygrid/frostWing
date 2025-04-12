import PropTypes from 'prop-types';

// @mui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  SMALL HERO - 3  ***************************/

export default function SmallHero3({ headLine, captionLine, exploreBtn }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ alignItems: 'start', gap: { xs: 1.5, md: 4 } }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'unset' }, width: 1, gap: 3 }}>
          <Stack sx={{ gap: 1.5 }}>
            {typeof headLine === 'string' ? <Typography variant="h1">{headLine}</Typography> : headLine}
            {captionLine && (
              <Typography variant="h6" sx={{ color: 'text.secondary', width: { md: '85%' } }}>
                {captionLine}
              </Typography>
            )}
          </Stack>
          {exploreBtn && (
            <Stack direction="row" sx={{ alignItems: 'end', justifyContent: 'center', minWidth: 'fit-content' }}>
              <Button size="large" variant="outlined" {...exploreBtn} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

SmallHero3.propTypes = { headLine: PropTypes.any, captionLine: PropTypes.any, exploreBtn: PropTypes.any };
