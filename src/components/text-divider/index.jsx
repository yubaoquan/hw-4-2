import PropTypes from 'prop-types';
import style from './text-divider.module.scss';

export default function TextDevider({ title }) {
  return (
    <div className={style.divider}>
      <h6>{title}</h6>
    </div>
  );
}

TextDevider.propTypes = { title: PropTypes.string.isRequired };
