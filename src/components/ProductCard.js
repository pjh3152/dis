import React from "react";

const ProductCard = (props) => {

  // 클릭할 경우 부모컴포넌트의 체크박스가 체크되도록 한다 (부모의 checkItem 함수 실행) 이건 마치 콜백함수처럼 동작하네~
  const selectItem = () => {
    props.checkItem(props.idx);
  }

  return (
    <div className="card shadow" style={{width:'16rem'}} onClick={selectItem}>
      <img src={`/Upload/${props.data.d_cover}`} className="card-img-top rounded-3" alt={props.data.d_title} style={{cursor:'pointer'}} />
      <div className="card-body">
        <p className="card-title text-start" style={{whiteSpace:'pre'}}>{props.data.d_title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
