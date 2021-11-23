import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Description',
    Svg: require('../../static/img/undraw_annotation.svg').default,
    description: (
      <>
        Simple representation to ease you classifying and knowing the usage of the data.
      </>
    ),
  },
  {
    title: 'Metadata',
    Svg: require('../../static/img/undraw_data_points.svg').default,
    description: (
      <>
          The summarize of basic information about data, making finding & working
          with particular instances of data easier.
      </>
    ),
  },
  {
    title: 'Map Preview',
    Svg: require('../../static/img/undraw_map.svg').default,
    description: (
      <>
        We provide you the spatial representation of an area of the data you need in a basemap.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
