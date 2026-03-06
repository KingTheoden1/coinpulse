'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';
import { buildPageNumbers, cn, ELLIPSIS } from '@/lib/utils';

const CoinsPagination = ({ currentPage, totalPages, hasMorePages }: Pagination) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/coins?page=${page}`);
  };

  const pageNumbers = buildPageNumbers(currentPage, totalPages);
  const isLastPage = !hasMorePages || currentPage === totalPages;

  return (
    <Pagination id="coins-pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-control prev">
          <PaginationPrevious
            href={`/coins?page=${currentPage - 1}`}
            onClick={(e) => {
              e.preventDefault();
              currentPage > 1 && handlePageChange(currentPage - 1);
            }}
            className={currentPage === 1 ? 'control-disabled' : 'control-button'}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
          />
        </PaginationItem>

        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === ELLIPSIS ? (
              <PaginationEllipsis className="ellipsis" />
            ) : (
              <PaginationLink
                href={`/coins?page=${page}`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                className={cn('page-link', {
                  'page-link-active': currentPage === page,
                })}
                aria-disabled={currentPage === page}
                tabIndex={currentPage === page ? -1 : 0}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem className="pagination-control next">
          <PaginationNext
            href={`/coins?page=${currentPage + 1}`}
            onClick={(e) => {
              e.preventDefault();
              !isLastPage && handlePageChange(currentPage + 1);
            }}
            className={isLastPage ? 'control-disabled' : 'control-button'}
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CoinsPagination;
