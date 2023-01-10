/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Marketplace',
    title: 'Trusted marketplace',
    text:
      'We have differents types of services depending of the target customer: B2B Retail or B2B Wholesale',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'B2B Retail',
    text:
      'As a customer, you can save your preferences to a print, view it in 3D, and purchase the pattern based on the choices you have set.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'B2B Wholesale',
    text:
      'We offer our APIs to businesses to allow them to integrate our printing services into their own and generate a diverse range of prints.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Go Beyond unlimited features and technologies"
          description="Either you are a customer that want a particular print or a business owner working in fashion, we have a solution for you "
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
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
};
