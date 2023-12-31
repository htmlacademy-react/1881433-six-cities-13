import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer-type';
import { AppRoute, COEF } from '../../const';

type FavoriteItemProps = {
  content: OfferType;
  onMouseOver: (offerId: string) => void;
  active: boolean;
}

function FavoriteCard({ content, onMouseOver, active }: FavoriteItemProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isPremium,
    rating,
    previewImage
  } = content;
  return (
    <article className={active ? 'favorites__card place-card--active' : 'favorites__card place-card'}
      onMouseOver={() => onMouseOver(id)}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src= {previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * COEF}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `${ AppRoute.Offer }/${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
