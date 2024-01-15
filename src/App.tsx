import { useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import DocumentScannerIcon from './assets/DocumentScannerIcon.svg';
import DocumentScannerSelectedIcon from './assets/DocumentScannerSelectedIcon.svg';
import SignStampIcon from './assets/SignStampIcon.svg';
import SignStampSelectedIcon from './assets/SignStampSelectedIcon.svg';
import BatchScanningIcon from './assets/BatchScanningIcon.svg';
import BatchScanningSelectedIcon from './assets/BatchScanningSelectedIcon.svg';
import AdvancedFiltersIcon from './assets/AdvancedFiltersIcon.svg';
import AdvancedFilersSelectedIcon from './assets/AdvancedFilersSelectedIcon.svg';
import ExportShareIcon from './assets/ExportShareIcon.svg';
import ExportShareSelectedIcon from './assets/ExportShareSelectedIcon.svg';

import { Tab, TabProps } from './components/Tab';
import { motion } from 'framer-motion';

import { PhoneAnimation } from './components/PhoneAnimation';

export function App() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [tabHeader, setTabHeader] = useState<string>('Document Scanner');
  const [tabTitle, setTabTitle] = useState<string>('Scan with Ease');
  const [tabDescription, setTabDescription] = useState<string>(
    'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const md = useMediaQuery('(min-width:900px)');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    tab: TabProps,
  ) => {
    setIsAnimating(true);
    setTabIndex(tab.index);
    setTimeout(() => {
      setIsAnimating(false);
      setTabHeader(tab.header);
      setTabTitle(tab.title);
      setTabDescription(tab.description);
    }, 700);
  };

  return (
    <Container sx={{ px: 0 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={md ? '100vh' : 'auto'}
        position={md ? 'relative' : 'absolute'}
        bottom={md ? 'auto' : 0}
      >
        <Stack display={md ? 'flex' : 'grid'}>
          <Box
            display="flex"
            overflow="hidden"
            alignSelf={md ? 'flex-end' : 'center'}
            alignItems={md ? 'flex-end' : 'center'}
            flexDirection={md ? 'row' : 'column-reverse'}
            height={md ? 440 : '87.5vh'}
            sx={{ overflowY: md ? 'hidden' : 'scroll' }}
          >
            <PhoneAnimation
              isAnimating={isAnimating}
              tabIndex={tabIndex}
              md={md}
            />
            <motion.div
              className="box"
              initial={{ opacity: isAnimating ? 1 : 0 }}
              animate={{ opacity: isAnimating ? 0 : 1 }}
              transition={{ duration: 0.7 }}
              style={{ width: md ? '60%' : '90%', alignSelf: 'center' }}
            >
              <Stack textAlign={md ? 'end' : 'center'} pt={5}>
                <Typography
                  fontWeight={800}
                  fontSize={16}
                  color="#0381FF"
                  textTransform="uppercase"
                  mb={1}
                >
                  {tabHeader}
                </Typography>
                <Typography fontWeight={700} fontSize={32} color="#0B122A">
                  {tabTitle}
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize={20}
                  color="#0B172A"
                  my={2}
                >
                  {tabDescription}
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    maxWidth: 135,
                    alignSelf: md ? 'flex-end' : 'center',
                    color: '#0B122A',
                    borderColor: '#00000029',
                    borderWidth: 0.5,
                    borderRadius: 0,
                    textTransform: 'none',
                    fontWeight: 400,
                    fontSize: 20,
                    py: 1,
                    px: 2,
                    marginBottom: md ? 0 : 2,
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </motion.div>
          </Box>
          <ToggleButtonGroup
            value={tabIndex}
            exclusive
            onChange={handleChange}
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              borderRadius: 0,
              alignSelf: 'center',
            }}
          >
            <Tab
              index={0}
              header="Document Scanner"
              title="Scan with Ease"
              description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
              selectedTab={tabIndex}
              defaultIcon={DocumentScannerIcon}
              selectedIcon={DocumentScannerSelectedIcon}
            />
            <Divider orientation="vertical" flexItem />
            <Tab
              index={1}
              header="Sign & Stamp"
              title="One-Tap Focus"
              description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
              selectedTab={tabIndex}
              defaultIcon={SignStampIcon}
              selectedIcon={SignStampSelectedIcon}
            />
            <Divider orientation="vertical" flexItem />
            <Tab
              index={2}
              header="Batch Scanning"
              title="Multiple Page Scan"
              description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
              selectedTab={tabIndex}
              defaultIcon={BatchScanningIcon}
              selectedIcon={BatchScanningSelectedIcon}
            />
            <Divider orientation="vertical" flexItem />
            <Tab
              index={3}
              header="Advanced Filters"
              title="Unique Filters"
              description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
              selectedTab={tabIndex}
              defaultIcon={AdvancedFiltersIcon}
              selectedIcon={AdvancedFilersSelectedIcon}
            />
            <Divider orientation="vertical" flexItem />
            <Tab
              index={4}
              header="Export & Share"
              title="All-Round Conversion"
              description="Export your scans as PDF,JPG,ZIP,TXT and Word."
              selectedTab={tabIndex}
              defaultIcon={ExportShareIcon}
              selectedIcon={ExportShareSelectedIcon}
            />
          </ToggleButtonGroup>
        </Stack>
      </Box>
    </Container>
  );
}
