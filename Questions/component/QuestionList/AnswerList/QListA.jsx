import React from 'react';
import styles from './QListA.module.css'
import HelpfulA from './HelpfulA.jsx';
import ReportA from './ReportA.jsx';

const QListA = (props) => {
  const {
    answer: {
      id,
      body,
      answerer,
      answerer_name,
      helpfulness
    }
  } = props;

  console.log(props);

  let date = props.answer.date.slice(0, 10).split('-');
  let year = Number(date[0]);
  let month = Number(date[1]) - 1;
  let day = Number(date[2]) - 1;
  date = new Date(year, month, day)

  const formattedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(date);

  // console.log(props);
  return(
    <div className={styles.answerContainer}>
      <div className={styles.body}>
        <span className={styles.prefix}>
          A:
        </span>

        <div className={styles.textContainer}>
          <span className={styles.text}>
            {body}
          </span>

          <span className={styles.answererContainer}>
            <span className={styles.answerer}>
              <sub>
                by {answerer_name}, {formattedDate} |
              </sub>
            </span>

            <HelpfulA
              helpful={helpfulness}
              answerID={id}
              updateHelpfulA={props.updateHelpfulA}
            />
            <ReportA
              answerID={id}
              reportA={props.reportA}
            />
          </span>
        </div>
      </div>

    </div>
  );
};

export default QListA;