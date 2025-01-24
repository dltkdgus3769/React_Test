import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 150px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
        text-decoration: none;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const FoodBusanItem = ({ article }) => {
  const { MAIN_TITLE, USAGE_DAY_WEEK_AND_TIME, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB } = article;

  return (
    <NewsItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>
          {MAIN_TITLE}
        </h2>
        <p>운영시간 : {USAGE_DAY_WEEK_AND_TIME}</p>
        <p>주소 : {ADDR1}</p>
        <p>설명 : {ITEMCNTNTS}</p>
      </div>
    </NewsItemBlock>
  );
};

export default FoodBusanItem;