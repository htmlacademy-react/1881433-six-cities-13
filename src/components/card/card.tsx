import { OfferType } from '../../types/offer-type';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardProps = {
  content: OfferType;
  active: boolean;
  onMouseOver: (offerId: string) => void;
}

const COEF = 15;

function Card({ content, active, onMouseOver }: CardProps): JSX.Element {
  return (
    <article className={active ? 'cities__card place-card--active' : 'cities__card place-card'}
      onMouseOver={() => onMouseOver(content.id)}
    >
      {content.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer}>
          <img className="place-card__image" src={content.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{content.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: content.rating * COEF}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{content.title}</a>
        </h2>
        <p className="place-card__type">{content.type}</p>
      </div>
    </article>
  );
}

export default Card;