import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kubernetes',
    url: '../../docs/Deploy/Care/GCP/K8s',
    Svg: require('@site/static/img/kubernetes.svg').default,
    description: (
      <>
        Care deployments are primarily deployed in Kubernetes clusters.
      </>
    ),
  },
  {
    title: 'Terraform',
    url: '/docs/Deploy/Care/',
    Svg: require('@site/static/img/terraform.svg').default,
    description: (
      <>
        Automated and declarative deploments possible using Terraform, utilizing various providers for all the major cloud providers
      </>
    ),
  },
  {
    title: 'Ansible',
    url: '/docs/middleware/',
    Svg: require('@site/static/img/ansible.svg').default,
    description: (
      <>
        Used to manage and monitor Middleware instances. Playbooks can be written to perform repetetive tasks for bulk executions
        uses yaml files as configs.
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url} rel="noopener noreferrer">
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={url} rel="noopener noreferrer">
            {title}
          </a>
        </Heading>
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