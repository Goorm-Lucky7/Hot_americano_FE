import { useEffect } from 'react';
import { pageStore } from '@/stores/page';
import PageButtons from '../pageButtons';
import PaidList from './PaidList';
import { useStore } from 'zustand';
import useGetPayment from '../../hooks/useGetPayment';
import { PaidInfo } from '@/types/payment';
import * as S from './styles';

const Purchase = () => {
  const { pageInfo, setPageInfo } = useStore(pageStore);
  const { data, isLoading, error } = useGetPayment(pageInfo.pageIndex, 6);

  useEffect(() => {
    if (data && data.pageParams) {
      setPageInfo({
        pageIndex: data.pageParams.pageIndex,
        isDone: data.pageParams.isDone,
      });
    }
  }, [data, setPageInfo]);

  return (
    <S.Container>
      {isLoading && <p>Loading...</p>}
      {error && <p>결제 정보를 불러오지 못 했습니다.</p>}
      {!error &&
        !isLoading &&
        data.pages.map((data: PaidInfo) => (
          <PaidList
            paymentId={data.paymentId}
            amount={data.amount}
            approvedAt={new Date(data.approvedAt)}
            order={data.order}
            galleryName={data.galleryName}
          />
        ))}
      <footer>
        <PageButtons />
      </footer>
    </S.Container>
  );
};

export default Purchase;