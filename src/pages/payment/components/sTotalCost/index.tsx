import * as S from './styles';
import { useParams } from 'react-router-dom';
import { postPayment } from '@/apis/payment';

const TotalCostBox = () => {
  const { galleryId } = useParams();

  const paidGallery = async () => {
    const payment = await postPayment(Number(galleryId), 'paidGallery');
    window.location.href = payment.next_redirect_pc_url;
  };

  return (
    <S.Container>
      <S.Title typography="t5" bold="bold">
        결제 상세
      </S.Title>
      <S.Box>
        <S.Block>
          <>상품금액</>
          <p>20000원</p>
        </S.Block>
        <S.Block>
          <>할인금액</>
          <span>20000원</span>
        </S.Block>
        <S.Total>최종 결제금액</S.Total>
        <S.Button onClick={paidGallery}>결제하기</S.Button>
      </S.Box>
    </S.Container>
  );
};

export default TotalCostBox;
