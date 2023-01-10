/** @jsx jsx */
import { jsx } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';

import Client from 'assets/images/client-thumb.png';

const data = [
  {
    id: 1,
    title: 'Simplicity',
    text:
      'We want to simplify the custom print design process by shortening the time & cost needed for a design using artificial intelligence.',
  },
  {
    id: 2,
    title: 'Sustanability',
    text:
      'We aim to participate in the reduction of waste through on-demand production and promote digital fashion that is 96% more sustainable.',
  },
  {
    id: 3,
    title: 'Fashion X Technology',
    text:
      'We invest in AI research and development by designing proprietary algorithms tailored to the fashion industry.',
  },
];


export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="Mission and Vision"
          description="Our mission is to revolutionize fashion by incorporating technology to personalize and revolutionize customer journeys.
          Sustainability is at the heart of 6DLabs. Our technology aims to reduce returns & the carbon footprint of the industry."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: 'special',
    color: 'heading',
    lineHeight: 1,
    letterSpacing: 'heading',
    mr: ['auto', null, 0, 4, null, null, null, 5],
    ml: ['auto', null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};