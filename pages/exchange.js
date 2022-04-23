import Head from 'next/head'

export default function Exchange() {
  return (
    <div>
      <Head>
      <title>Exchange</title>
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
  />
  <meta name="theme-color" content="#fff" />
  <meta name="format-detection" content="telephone=no" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="img/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="img/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="img/favicon-16x16.png"
  />
  <link rel="manifest" href="img/site.webmanifest" />
  <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
  <meta
    name="description"
    content="The Premium Production-ready Crypto Asset Exchange Kit"
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@ui8" />
  <meta name="twitter:title" content="Unity Dashboard Kit: Exchange 🤑" />
  <meta
    name="twitter:description"
    content="The Premium Production-ready Crypto Asset Exchange Kit"
  />
  <meta name="twitter:creator" content="@ui8" />
  <meta
    name="twitter:image"
    content="https://ui8-unity-exchange.herokuapp.com/img/twitter-card.jpg"
  />
  <meta property="og:title" content="Unity Dashboard Kit: Exchange 🤑" />
  <meta property="og:type" content="Article" />
  <meta
    property="og:url"
    content="https://ui8.net/ui8/products/unity-dashboard-kit--exchange"
  />
  <meta
    property="og:image"
    content="https://ui8-unity-exchange.herokuapp.com/img/fb-og-image.jpg"
  />
  <meta
    property="og:description"
    content="The Premium Production-ready Crypto Asset Exchange Kit"
  />
  <meta property="og:site_name" content="Unity Dashboard Kit: Exchange 🤑" />
  <meta property="fb:admins" content={132951670226590} />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" media="all" href="css/app.css" />
  <link href="css/output.css" rel="stylesheet"/>
      </Head>
      <>
  <div className="page full">
    <div className="sidebar small">
      <div className="sidebar__head">
        <a className="sidebar__logo" href="index.html">
          <img
            className="sidebar__pic sidebar__pic_light"
            src="img/logo.svg"
            alt=""
          />
          <img
            className="sidebar__pic sidebar__pic_dark"
            src="img/logo-white.svg"
            alt=""
          />
        </a>
        <button className="sidebar__toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 12H3" stroke="#11142d" />
            <g stroke="#808191">
              <path d="M22 4H13" />
              <path opacity=".301" d="M22 20H13" />
            </g>
            <path d="M7 7l-5 5 5 5" stroke="#11142d" />
          </svg>
        </button>
        <button className="sidebar__close">
          <svg className="icon icon-close">
            <use xlinkHref="img/sprite.svg#icon-close" />
          </svg>
        </button>
      </div>
      <div className="sidebar__body">
        <nav className="sidebar__nav">
          <a className="sidebar__item" href="index.html">
            <div className="sidebar__icon">
              <svg className="icon icon-home">
                <use xlinkHref="img/sprite.svg#icon-home" />
              </svg>
            </div>
            <div className="sidebar__text">Home</div>
          </a>
          <a className="sidebar__item active" href="exchange.html">
            <div className="sidebar__icon">
              <svg className="icon icon-chart">
                <use xlinkHref="img/sprite.svg#icon-chart" />
              </svg>
            </div>
            <div className="sidebar__text">Exchange</div>
          </a>
          <a className="sidebar__item" href="prices.html">
            <div className="sidebar__icon">
              <svg className="icon icon-document">
                <use xlinkHref="img/sprite.svg#icon-document" />
              </svg>
            </div>
            <div className="sidebar__text">Prices</div>
          </a>
          <a className="sidebar__item" href="wallets.html">
            <div className="sidebar__icon">
              <svg className="icon icon-wallet">
                <use xlinkHref="img/sprite.svg#icon-wallet" />
              </svg>
            </div>
            <div className="sidebar__text">Wallets</div>
          </a>
          <a className="sidebar__item" href="promotions.html">
            <div className="sidebar__icon">
              <svg className="icon icon-discount">
                <use xlinkHref="img/sprite.svg#icon-discount" />
              </svg>
            </div>
            <div className="sidebar__text">Promotions</div>
          </a>
          <a className="sidebar__item" href="activities.html">
            <div className="sidebar__icon">
              <svg className="icon icon-activity">
                <use xlinkHref="img/sprite.svg#icon-activity" />
              </svg>
            </div>
            <div className="sidebar__text">Activities</div>
          </a>
          <a className="sidebar__item" href="notifications.html">
            <div className="sidebar__icon">
              <svg className="icon icon-notification">
                <use xlinkHref="img/sprite.svg#icon-notification" />
              </svg>
            </div>
            <div className="sidebar__text">Notifications</div>
          </a>
          <a
            className="sidebar__item js-popup-open"
            href="#popup-settings"
            data-effect="mfp-zoom-in"
          >
            <div className="sidebar__icon">
              <svg className="icon icon-settings">
                <use xlinkHref="img/sprite.svg#icon-settings" />
              </svg>
            </div>
            <div className="sidebar__text">Settings</div>
          </a>
        </nav>
        <div className="sidebar__mail">
          <button className="sidebar__close">
            <svg className="icon icon-close">
              <use xlinkHref="img/sprite.svg#icon-close" />
            </svg>
          </button>
          <div className="sidebar__info">Send Cryto to An Email Address</div>
          <button className="sidebar__btn btn btn_white btn_sm">
            Send Now
          </button>
        </div>
        <form className="sidebar__search">
          <input className="sidebar__input" type="text" placeholder="Search" />
          <button className="sidebar__start">
            <svg className="icon icon-search">
              <use xlinkHref="img/sprite.svg#icon-search" />
            </svg>
          </button>
        </form>
      </div>
      <div className="sidebar__bottom">
        <label className="switch switch_theme js-switch-theme">
          <input className="switch__input" type="checkbox" />
          <span className="switch__in">
            <span className="switch__box" />
            <span className="switch__icon">
              <svg className="icon icon-theme-light">
                <use xlinkHref="img/sprite.svg#icon-theme-light" />
              </svg>
              <svg className="icon icon-theme-dark">
                <use xlinkHref="img/sprite.svg#icon-theme-dark" />
              </svg>
            </span>
          </span>
        </label>
        <a className="sidebar__user" href="sign-in.html">
          <img src="img/ava-header.png" alt="" />
        </a>
      </div>
    </div>
    <div className="page__content">
      <div className="header">
        <form className="header__search">
          <input className="header__input" type="text" placeholder="Search" />
          <button className="header__start">
            <svg className="icon icon-search">
              <use xlinkHref="img/sprite.svg#icon-search" />
            </svg>
          </button>
        </form>
        <a className="header__logo" href="index.html">
          <img src="img/logo-sm.svg" alt="" />
        </a>
        <div className="header__group">
          <div className="header__indicator">
            <div className="header__img">
              <img src="img/pulse.svg" alt="" />
            </div>
            24
          </div>
          <div className="header__item header__item_notifications">
            <button className="header__head active">
              <svg className="icon icon-notification">
                <use xlinkHref="img/sprite.svg#icon-notification" />
              </svg>
            </button>
            <div className="header__body">
              <div className="header__notifications">
                <div className="header__notification">
                  <div className="header__icon">
                    <img src="img/paper.svg" alt="" />
                  </div>
                  <div className="header__details">
                    <div className="header__info">
                      Wrapped Bitcoin is now listed on Unity Exchange
                    </div>
                    <div className="header__line">
                      <div className="header__time">24m ago</div>
                      <div className="header__status" />
                    </div>
                  </div>
                </div>
                <div className="header__notification">
                  <div className="header__icon">
                    <img src="img/paper.svg" alt="" />
                  </div>
                  <div className="header__details">
                    <div className="header__info">
                      Wrapped Bitcoin is now listed on Unity Exchange
                    </div>
                    <div className="header__line">
                      <div className="header__time">24m ago</div>
                      <div className="header__status" />
                    </div>
                  </div>
                </div>
                <div className="header__notification">
                  <div className="header__icon">
                    <img src="img/paper.svg" alt="" />
                  </div>
                  <div className="header__details">
                    <div className="header__info">
                      Wrapped Bitcoin is now listed on Unity Exchange
                    </div>
                    <div className="header__line">
                      <div className="header__time">24m ago</div>
                      <div className="header__status" />
                    </div>
                  </div>
                </div>
                <div className="header__notification">
                  <div className="header__icon">
                    <img src="img/paper.svg" alt="" />
                  </div>
                  <div className="header__details">
                    <div className="header__info">
                      Wrapped Bitcoin is now listed on Unity Exchange
                    </div>
                    <div className="header__line">
                      <div className="header__time">24m ago</div>
                      <div className="header__status" />
                    </div>
                  </div>
                </div>
                <div className="header__notification">
                  <div className="header__icon">
                    <img src="img/paper.svg" alt="" />
                  </div>
                  <div className="header__details">
                    <div className="header__info">
                      Wrapped Bitcoin is now listed on Unity Exchange
                    </div>
                    <div className="header__line">
                      <div className="header__time">24m ago</div>
                      <div className="header__status" />
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="header__btn btn btn_blue btn_wide"
                href="notifications.html"
              >
                See all notifications
              </a>
            </div>
          </div>
          <div className="header__item header__item_download">
            <button className="header__head">
              <svg className="icon icon-arrow-down-square">
                <use xlinkHref="img/sprite.svg#icon-arrow-down-square" />
              </svg>
            </button>
            <div className="header__body">
              <div className="header__row">
                <div className="header__col">
                  <div className="header__category">Downloads</div>
                  <div className="header__downloads">
                    <a className="header__download" href="#">
                      <img src="img/app-store.svg" alt="" />
                    </a>
                    <a className="header__download" href="#">
                      <img src="img/google-play.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="header__col">
                  <div className="header__category">Scan Code</div>
                  <div className="header__code">
                    <img src="img/qr-code.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item header__item_lang">
            <button className="header__head">Eng/USD</button>
            <div className="header__body">
              <div className="header__lang">
                <div className="header__cell">
                  <a className="header__link active" href="#">
                    <span className="header__flag">🇺🇸</span> English
                  </a>
                  <a className="header__link" href="#">
                    <span className="header__flag">🇨🇳</span> 中文
                  </a>
                  <a className="header__link" href="#">
                    <span className="header__flag">🇪🇸</span> Española
                  </a>
                  <a className="header__link" href="#">
                    <span className="header__flag">🇫🇷</span> Français
                  </a>
                  <a className="header__link" href="#">
                    <span className="header__flag">🇻🇳</span> Tiếng Việt
                  </a>
                </div>
                <div className="header__cell">
                  <a className="header__link active" href="#">
                    USD
                  </a>
                  <a className="header__link" href="#">
                    EUR
                  </a>
                  <a className="header__link" href="#">
                    JPY
                  </a>
                  <a className="header__link" href="#">
                    BTC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="header__user" href="sign-in.html">
          <img src="img/ava-header.png" alt="" />
        </a>
        <button className="header__toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 12H3" stroke="#11142d" />
            <g stroke="#808191">
              <path d="M22 4H13" />
              <path opacity=".301" d="M22 20H13" />
            </g>
            <path d="M7 7l-5 5 5 5" stroke="#11142d" />
          </svg>
        </button>
      </div>
      <div className="page__container page__container_exchange">
        <div className="exchange">
          <div className="exchange__top">
            <div className="exchange__cell">
              <div className="exchange__company">
                <div className="exchange__head">
                  <div className="exchange__logo">
                    <img src="img/logo/bitcoin.png" alt="" />
                  </div>
                  <div className="exchange__details">
                    <div className="exchange__currency">BTC/USDT</div>
                    <div className="exchange__info">Bitcoin</div>
                  </div>
                  <div className="exchange__arrow">
                    <svg className="icon icon-arrow-down">
                      <use xlinkHref="img/sprite.svg#icon-arrow-down" />
                    </svg>
                  </div>
                </div>
                <div className="exchange__body">
                  <a className="exchange__item" href="#">
                    <div className="exchange__logo">
                      <img src="img/logo/bitcoin.png" alt="" />
                    </div>
                    <div className="exchange__details">
                      <div className="exchange__currency">BTC/USDT</div>
                      <div className="exchange__info">Bitcoin</div>
                    </div>
                  </a>
                  <a className="exchange__item" href="#">
                    <div className="exchange__logo">
                      <img src="img/logo/ethereum.png" alt="" />
                    </div>
                    <div className="exchange__details">
                      <div className="exchange__currency">BTC/USDT</div>
                      <div className="exchange__info">Ethereum</div>
                    </div>
                  </a>
                  <a className="exchange__item" href="#">
                    <div className="exchange__logo">
                      <img src="img/logo/ripple.png" alt="" />
                    </div>
                    <div className="exchange__details">
                      <div className="exchange__currency">BTC/USDT</div>
                      <div className="exchange__info">Ripple</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="exchange__cell">
              <div className="exchange__info">24h Change</div>
              <div className="status positive">0.44%</div>
            </div>
            <div className="exchange__cell">
              <div className="exchange__info">Last Pricea</div>
              <div className="exchange__price">18372.595198 USDT</div>
            </div>
            <div className="exchange__cell">
              <div className="exchange__info">24h Low</div>
              <div className="exchange__price">18042.595198 USDT</div>
            </div>
            <div className="exchange__cell">
              <div className="exchange__info">24h High</div>
              <div className="exchange__price">18589.595198 USDT</div>
            </div>
            <div className="exchange__cell">
              <div className="exchange__info">Volume</div>
              <div className="exchange__price">38645464.476 USDT</div>
            </div>
          </div>
          <div className="exchange__row">
            <div className="exchange__container">
              <div className="market">
                <div className="market__tabs js-tabs">
                  <div className="market__head">
                    <div className="market__menu">
                      <a className="market__link js-tabs-link active" href="#">
                        Price Chart
                      </a>
                      <a className="market__link js-tabs-link" href="#">
                        Deep Chart
                      </a>
                    </div>
                    <div className="market__group">
                      <div className="market__actions">
                        <a className="market__action" href="#">
                          <svg className="icon icon-time-clock">
                            <use xlinkHref="img/sprite.svg#icon-time-clock" />
                          </svg>
                          <span>30m</span>
                        </a>
                        <a className="market__action" href="#">
                          <svg className="icon icon-ranking">
                            <use xlinkHref="img/sprite.svg#icon-ranking" />
                          </svg>
                          <span>Indicator</span>
                        </a>
                        <a className="market__action" href="#">
                          <svg className="icon icon-arrow-up-right-square">
                            <use xlinkHref="img/sprite.svg#icon-arrow-up-right-square" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="market__body">
                    <div className="market__container">
                      <div
                        className="market__item js-tabs-item"
                        style={{ display: "block" }}
                      >
                        <div className="market__legend">
                          <div className="market__variant">BTC/USDT</div>
                          <div className="market__variant">
                            O <span className="negative">18432.3204898</span>
                          </div>
                          <div className="market__variant">
                            H <span className="negative">18432.3204898</span>
                          </div>
                          <div className="market__variant">
                            L <span className="negative">18432.3204898</span>
                          </div>
                          <div className="market__variant">
                            C <span className="negative">18432.3204898</span>
                          </div>
                        </div>
                        <div className="market__chart market__chart_price">
                          <div id="chart-exhcange-price" />
                        </div>
                      </div>
                      <div className="market__item js-tabs-item">
                        <div className="market__legend">
                          <div className="market__variant">BTC/USDT</div>
                          <div className="market__variant">
                            O <span className="positive">18432.3204898</span>
                          </div>
                          <div className="market__variant">
                            H <span className="positive">18432.3204898</span>
                          </div>
                          <div className="market__variant">
                            L <span className="positive">18432.3204898</span>
                          </div>
                          <div className="market__variant">
                            C <span className="positive">18432.3204898</span>
                          </div>
                        </div>
                        <div className="market__chart market__chart_deep">
                          <div id="chart-exhcange-deep" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="market__transactions">
                  <div className="market__top js-tabs">
                    <div className="market__menu mobile-hide">
                      <a className="market__link js-tabs-link active" href="#">
                        Price Chart
                      </a>
                      <a className="market__link js-tabs-link" href="#">
                        Deep Chart
                      </a>
                      <a className="market__link js-tabs-link" href="#">
                        Open Orders
                      </a>
                      <a className="market__link js-tabs-link" href="#">
                        Favorites
                      </a>
                    </div>
                    <div className="market__title h6">Market Trades</div>
                    <div className="market__select mobile-show">
                      <select className="select">
                        <option>Price Chart</option>
                        <option>Deep Chart</option>
                        <option>Open Orders</option>
                        <option>Favorites</option>
                      </select>
                    </div>
                  </div>
                  <div className="market__table">
                    <div className="market__row market__row_head">
                      <div className="market__cell">time</div>
                      <div className="market__cell">
                        price <span className="mobile-hide">(usdt)</span>
                      </div>
                      <div className="market__cell">
                        amount <span className="mobile-hide">(btc)</span>
                      </div>
                      <div className="market__cell">
                        total <span className="mobile-hide">(usdt)</span>
                      </div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell positive">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                    <div className="market__row">
                      <div className="market__cell">18:02:12</div>
                      <div className="market__cell negative">18432.3204898</div>
                      <div className="market__cell">18446.62230935</div>
                      <div className="market__cell">18446.62230935</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="exchange__sidebar">
              <div className="orders">
                <div className="orders__head">
                  <div className="orders__title h6">Order Book</div>
                  <div className="orders__sorting">
                    <a className="orders__link" href="#">
                      {" "}
                      <span style={{ backgroundColor: "#3DBAA2" }} />
                      <span style={{ backgroundColor: "#3DBAA2" }} />
                      <span style={{ backgroundColor: "#3DBAA2" }} />
                    </a>
                    <a className="orders__link" href="#">
                      <span style={{ backgroundColor: "#FF7A68" }} />
                      <span style={{ backgroundColor: "#FF7A68" }} />
                      <span style={{ backgroundColor: "#FF7A68" }} />
                    </a>
                    <a className="orders__link active" href="#">
                      <span style={{ backgroundColor: "#FF7A68" }}> </span>
                      <span style={{ backgroundColor: "#3DBAA2" }} />
                      <span style={{ backgroundColor: "#E4E4E4" }} />
                    </a>
                  </div>
                </div>
                <div className="orders__table">
                  <div className="orders__row orders__row_head">
                    <div className="orders__cell">PRICE (USDT)</div>
                    <div className="orders__cell">AMOUNT (BTC)</div>
                    <div className="orders__cell">TOTAL (USDT)</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "90%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "60%" }} />
                    </div>
                    <div className="orders__cell">0.254878</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "55%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "70%" }} />
                    </div>
                    <div className="orders__cell">0.4268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "85%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "73%" }} />
                    </div>
                    <div className="orders__cell">0.3268</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__up">
                      5.43268623
                      <div className="orders__bg" style={{ width: "30%" }} />
                    </div>
                    <div className="orders__cell">0.254878</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__price">18372.54657323 USDT</div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "15%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "9%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "36%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "47%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "54%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "25%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                  <div className="orders__row">
                    <div className="orders__cell orders__down">
                      18446.62230935
                      <div className="orders__bg" style={{ width: "55%" }} />
                    </div>
                    <div className="orders__cell">5.43268623</div>
                    <div className="orders__cell">5.43268623</div>
                  </div>
                </div>
              </div>
              <div className="actions">
                <div className="actions__menu">
                  <a className="actions__link active" href="#">
                    Buy
                  </a>
                  <a className="actions__link" href="#">
                    Sell
                  </a>
                </div>
                <form className="actions__form">
                  <div className="actions__fieldset">
                    <div className="actions__field">
                      <div className="actions__label">order type</div>
                      <select className="select">
                        <option>Stop Limit</option>
                        <option>Stop Limit</option>
                        <option>Stop Limit</option>
                      </select>
                    </div>
                    <div className="actions__field">
                      <div className="actions__label">limit price</div>
                      <input className="actions__input" type="tel" />
                      <div className="actions__currency color-green">USDT </div>
                    </div>
                    <div className="actions__field">
                      <div className="actions__label">amount</div>
                      <input className="actions__input" type="tel" />
                      <div className="actions__currency color-orange">BTC</div>
                    </div>
                    <div className="actions__field">
                      <div className="actions__label">amount</div>
                      <input className="actions__input" type="tel" />
                      <div className="actions__currency color-green">USDT</div>
                    </div>
                  </div>
                  <button className="actions__btn btn btn_blue btn_wide">
                    Buy BTC
                  </button>
                </form>
              </div>
              <div
                className="exchange__banner"
                style={{ backgroundImage: 'url("img/banner.jpg")' }}
              >
                <div className="exchange__date">November 2020 </div>
                <div className="exchange__title h4">
                  Trading &amp; Asset Updates
                </div>
                <button className="exchange__btn btn btn_white btn_sm">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className="exchange__foot">
            <div className="exchange__menu">
              <a
                className="exchange__link active"
                href="#"
                data-class=".exchange__top, .market__tabs"
              >
                <svg className="icon icon-chart">
                  <use xlinkHref="img/sprite.svg#icon-chart" />
                </svg>
              </a>
              <a
                className="exchange__link"
                href="#"
                data-class=".market__transactions"
              >
                <svg className="icon icon-document-plus">
                  <use xlinkHref="img/sprite.svg#icon-document-plus" />
                </svg>
              </a>
              <a className="exchange__link" href="#" data-class=".orders">
                <svg className="icon icon-swap">
                  <use xlinkHref="img/sprite.svg#icon-swap" />
                </svg>
              </a>
              <a className="exchange__link note" href="#" data-class=".actions">
                <svg className="icon icon-document-two-lines">
                  <use xlinkHref="img/sprite.svg#icon-document-two-lines" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="popup popup_settings mfp-hide" id="popup-settings">
    <div className="popup__title h6">Account Settings</div>
    <div className="popup__tabs js-tabs">
      <div className="popup__select mobile-show">
        <select className="select js-tabs-select">
          <option>Profile</option>
          <option>Referrals</option>
          <option>Password</option>
          <option>2FA</option>
          <option>Sessions &amp; Login History</option>
        </select>
      </div>
      <div className="popup__nav">
        <a className="popup__link js-tabs-link active" href="#">
          Profile
        </a>
        <a className="popup__link js-tabs-link" href="#">
          Referrals
        </a>
        <a className="popup__link js-tabs-link" href="#">
          Password
        </a>
        <a className="popup__link js-tabs-link" href="#">
          2FA
        </a>
        <a className="popup__link js-tabs-link" href="#">
          Sessions &amp; Login History
        </a>
      </div>
      <div className="popup__container">
        <div className="popup__item js-tabs-item" style={{ display: "block" }}>
          <div className="popup__user">
            <div className="popup__label popup__label_mb32">Your Avatar</div>
            <div className="popup__line">
              <div className="popup__ava">
                <img className="popup__pic" src="img/ava-header.png" alt="" />
              </div>
              <div className="popup__details">
                <div className="popup__btns">
                  <div className="popup__loading">
                    <input className="popup__file" type="file" />
                    <button className="popup__upload">Upload New</button>
                  </div>
                  <button className="popup__btn btn btn_gray">
                    Delete Avatar
                  </button>
                </div>
                <a className="popup__default" href="#">
                  Use default avatar
                </a>
              </div>
            </div>
          </div>
          <div className="popup__fieldset">
            <div className="popup__row">
              <div className="popup__field">
                <div className="popup__label">Your Full Name</div>
                <div className="popup__wrap">
                  <input className="popup__input" type="text" />
                </div>
              </div>
              <div className="popup__field">
                <div className="popup__label">Display Name</div>
                <div className="popup__wrap">
                  <input className="popup__input" type="text" />
                </div>
              </div>
            </div>
            <div className="popup__row">
              <div className="popup__field">
                <div className="popup__label">Email</div>
                <div className="popup__wrap">
                  <input className="popup__input" type="email" />
                </div>
              </div>
              <div className="popup__field">
                <div className="popup__label">Location</div>
                <div className="popup__wrap">
                  <input className="popup__input" type="text" />
                </div>
              </div>
            </div>
            <div className="popup__row">
              <div className="popup__field">
                <div className="popup__label">Deposit Assets</div>
                <div className="popup__wrap">
                  <select className="select select_arrows select_sm">
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
              </div>
              <div className="popup__field">
                <div className="popup__label">Withdraw assets</div>
                <div className="popup__wrap">
                  <select className="select select_arrows select_sm">
                    <option>Enabled $1,000,000 USD/day</option>
                    <option>Disable $1,000,000 USD/day</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="popup__label">Notifications</div>
          <div className="popup__variants">
            <label className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                defaultChecked=""
              />
              <span className="checkbox__in">
                <span className="checkbox__tick" />
                <span className="checkbox__text">Promotions</span>
              </span>
            </label>
            <label className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                defaultChecked=""
              />
              <span className="checkbox__in">
                <span className="checkbox__tick" />
                <span className="checkbox__text">Exchange</span>
              </span>
            </label>
            <label className="checkbox">
              <input className="checkbox__input" type="checkbox" />
              <span className="checkbox__in">
                <span className="checkbox__tick" />
                <span className="checkbox__text">Withdrawals</span>
              </span>
            </label>
          </div>
          <button className="popup__btn btn btn_blue" type="submit">
            Update Profile
          </button>
        </div>
        <div className="popup__item js-tabs-item">
          <div className="popup__invite">
            <div className="popup__info h6">
              Invite your friends to Unity Exchange and Earn 15% on Friends
              trading fees
            </div>
            <div className="popup__label">Your Referral Link</div>
            <div className="popup__wrap">
              <input
                className="popup__input"
                type="text"
                defaultValue="https://unityexchange.design/ref?tranmautritam"
              />
              <button className="popup__copy">
                <svg className="icon icon-copy">
                  <use xlinkHref="img/sprite.svg#icon-copy" />
                </svg>
              </button>
            </div>
          </div>
          <div className="popup__category">Total Rewards</div>
          <div className="popup__flex">
            <div className="popup__money h3">128.256</div>
            <div className="popup__currency">USTD</div>
          </div>
          <div className="popup__parameters">
            <div className="popup__parameter">
              <div className="popup__head">
                <div className="popup__text">Inviter Rewards</div>
                <div className="popup__text">0.00 USDT</div>
              </div>
              <div className="popup__body">
                You’re earning 20% of the trading fees your referrals pay.
              </div>
            </div>
            <div className="popup__parameter">
              <div className="popup__head">
                <div className="popup__text">Total Invited</div>
                <div className="popup__text">64</div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup__item js-tabs-item">
          <form className="popup__form">
            <div className="popup__title h6">Change Password</div>
            <div className="popup__field field js-field">
              <div className="field__label">current Password</div>
              <div className="field__wrap">
                <input
                  className="field__input js-field-input"
                  type="password"
                />
              </div>
            </div>
            <div className="popup__field field js-field">
              <div className="field__label">new Password</div>
              <div className="field__wrap">
                <input
                  className="field__input js-field-input"
                  type="password"
                />
              </div>
            </div>
            <div className="popup__field field js-field">
              <div className="field__label">Confirm new Password</div>
              <div className="field__wrap">
                <input
                  className="field__input js-field-input"
                  type="password"
                />
              </div>
            </div>
            <button className="popup__btn btn btn_blue btn_wide">
              Change Password
            </button>
          </form>
        </div>
        <div className="popup__item js-tabs-item">
          <div className="popup__box">
            <div className="popup__title h6">Scan Code</div>
            <div className="popup__scan">
              <div className="popup__preview">
                <img src="img/qr-code.png" alt="" />
              </div>
              <div className="popup__details">
                <div className="popup__text">
                  If you want to turn on 2FA, use{" "}
                  <a href="#">Google Authenticator app</a> to scan code, then
                  enter six-digit code provided by the app to the form below.
                </div>
                <button className="popup__btn btn btn_blue">
                  Download 2FA App
                </button>
              </div>
            </div>
          </div>
          <div className="popup__box">
            <div className="popup__title h6">Enter six-digit code</div>
            <div className="popup__numbers">
              <div className="popup__number success">
                <input type="tel" defaultValue={5} />
              </div>
              <div className="popup__number success">
                <input type="tel" defaultValue={6} />
              </div>
              <div className="popup__number success">
                <input type="tel" defaultValue={7} />
              </div>
              <div className="popup__number success">
                <input type="tel" defaultValue={9} />
              </div>
              <div className="popup__number">
                <input type="tel" />
              </div>
              <div className="popup__number">
                <input type="tel" />
              </div>
            </div>
          </div>
        </div>
        <div className="popup__item js-tabs-item">
          <div className="popup__box">
            <div className="popup__title h6">Active Sessions</div>
            <table className="popup__table">
              <tbody>
                <tr>
                  <th>DATE/TIME</th>
                  <th>DEVICE</th>
                  <th>LOCATION</th>
                  <th>IP ADDRESS</th>
                  <th> </th>
                </tr>
                <tr>
                  <td>2020-12-02 07:50:18</td>
                  <td>iMac Pro</td>
                  <td>
                    <span className="popup__flag">🇺🇸</span> USA{" "}
                  </td>
                  <td>123.45.678.987</td>
                  <td>
                    <button className="popup__close">
                      <svg className="icon icon-close">
                        <use xlinkHref="img/sprite.svg#icon-close" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="popup__box">
            <div className="popup__title h6">Login History</div>
            <table className="popup__table">
              <tbody>
                <tr>
                  <th>DATE/TIME</th>
                  <th>DEVICE</th>
                  <th>LOCATION</th>
                  <th>IP ADDRESS</th>
                  <th>2FA</th>
                </tr>
                <tr>
                  <td>2020-12-02 07:50:18</td>
                  <td>iMac Pro</td>
                  <td>
                    <span className="popup__flag">🇻🇳</span> VN
                  </td>
                  <td>123.45.678.987</td>
                  <td>
                    <svg className="icon icon-check">
                      <use xlinkHref="img/sprite.svg#icon-check" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>2020-12-02 07:50:18</td>
                  <td>iPhone X</td>
                  <td>
                    <span className="popup__flag">🇺🇸</span> USA{" "}
                  </td>
                  <td>123.45.678.987</td>
                  <td>
                    <svg className="icon icon-check">
                      <use xlinkHref="img/sprite.svg#icon-check" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>2020-12-02 07:50:18</td>
                  <td>iMac Pro</td>
                  <td>
                    <span className="popup__flag">🇻🇳</span> VN
                  </td>
                  <td>123.45.678.987</td>
                  <td>
                    <svg className="icon icon-check">
                      <use xlinkHref="img/sprite.svg#icon-check" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>2020-12-02 07:50:18</td>
                  <td>iMac Pro</td>
                  <td>
                    <span className="popup__flag">🇺🇸</span> USA{" "}
                  </td>
                  <td>123.45.678.987</td>
                  <td>
                    <svg className="icon icon-check">
                      <use xlinkHref="img/sprite.svg#icon-check" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>2020-12-02 07:50:18</td>
                  <td>iMac Pro</td>
                  <td>
                    <span className="popup__flag">🇺🇸</span> USA{" "}
                  </td>
                  <td>123.45.678.987</td>
                  <td>
                    <svg className="icon icon-check">
                      <use xlinkHref="img/sprite.svg#icon-check" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}