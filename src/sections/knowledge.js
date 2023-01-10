/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import KnowledgeThumb from 'assets/images/knowledge-thumb.png';


const data = {
  title: 'B2B Retail : we provide an AI print generation plateform for  Small Manufacturers of Apparel, Textile & Furnishings',
  description:
    'Generate print based on your preferences in term of color, size, gender, trend, etc.',
  btnName: 'Explore Details',
  btnURL: '#',
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: '3D model selection',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'print generation',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: '3D visualization',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Purchase',
    },
  ],
};

export default function Knowledge() {
  return (
    <section sx={{ variant: 'section.knowledge' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image
            src={KnowledgeThumb}
            alt="Thumbnail"
            width="632"
            height="750"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: 'flex',
    mx: ['auto', null, null, 0],
    img: {
      height: [400, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 365, 420, 430, '490px'],
    pb: [7, null, null, 0],
    '.description': {
      pr: [0, null, 7, 5],
    },
    '.btn__link': {
      mt: [5, null, null, 6],
    },
  },
};
