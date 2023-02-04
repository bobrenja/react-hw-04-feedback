import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

PropTypes.Section = {
  totle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
