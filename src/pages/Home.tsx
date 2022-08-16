import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import Pagination from "../components/Pagination";
import { sortList } from "../components/Sort";
import {
  fetchPizza,
  SearchPizzaParams,
  selectPizza,
} from "../redux/slices/pizzaSlice";
import {
  setCategoryId,
  setPageCount,
  setFilters,
  selectFilter,
} from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const { categoryId, sort, pageCount, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (page: number) => {
    dispatch(setPageCount(page));
  };

  React.useEffect(() => {
    if (window.location.search) {
      // const params = qs.parse(
      //   window.location.search.substring(1)
      // ) as unknown as SearchPizzaParams;
      // const sortObj = sortList.find(
      //   (obj) => obj.sortProperty === params.sortBy
      // );
      // dispatch(
      //   setFilters({
      //     searchValue: params.search,
      //     categoryId: Number(params.category),
      //     pageCount: Number(params.pageCount),
      //     sort: sortObj || sortList[0],
      //   })
      // );
    }
  }, []);

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      // @ts-ignore
      fetchPizza({
        order,
        sortBy,
        category,
        search,
        pageCount,
      })
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      pageCount,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sort.sortProperty, searchValue, pageCount, navigate]);
  const pizzas = items.map((obj: any) => (
    <PizzaBlock
      id={obj.id}
      title={obj.title}
      price={obj.price}
      imageUrl={obj.imageUrl}
      sizes={obj.sizes}
      types={obj.types}
    />
  ));
  const skeleton = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories id={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? skeleton : pizzas}
      </div>
      <Pagination onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
