// Arayüz metinleri — 7 dil. Ürün adları data/products.json içinde.
export const LANGS = [
  ['uk', 'UA', 'Українська'],
  ['en', 'EN', 'English'],
  ['ru', 'RU', 'Русский'],
  ['de', 'DE', 'Deutsch'],
  ['fr', 'FR', 'Français'],
  ['pl', 'PL', 'Polski'],
  ['tr', 'TR', 'Türkçe']
];

export const T = {
  uk: {
    sort_rec: 'Рекомендовані', sort_asc: 'Ціна: за зростанням', sort_desc: 'Ціна: за спаданням', new_badge: 'Нове', cta_collection: 'Дивитися колекцію', categories_title: 'Категорії', featured: 'Рекомендуємо',
    orbit_title: 'Уся колекція', drag_hint: 'Перетягніть, щоб обертати · натисніть на виріб', close: 'Закрити', details: 'Детальніше',
    nav_collections: 'Колекції', nav_about: 'Про нас', nav_stores: 'Магазини',
    kicker: 'Салон шкіри та хутра', hero_title: 'Власне виробництво.<br>Натуральна шкіра.',
    hero_sub: 'Пальта, куртки та дублянки, пошиті в нашій майстерні — для тих, хто цінує якість.',
    closet_kicker: 'Нова колекція',
    f_all: 'Усі', f_coats: 'Пальта', f_jackets: 'Куртки', f_sheepskins: 'Дублянки', f_bags: 'Сумки',
    
    order_tg: 'Замовити в Telegram', call: 'Зателефонувати',
    material: 'Матеріал', sizes: 'Розмір', color: 'Колір', code: 'Код', care: 'Догляд', care_text: 'Лише професійне чищення шкіри',
    in_stock: 'В наявності', on_order: 'Під замовлення', mat_leather: 'Натуральна шкіра', mat_fur: 'Натуральне хутро',
    about_title: 'Ferrizo — шкіра, яка служить роками',
    about_text: 'Ми самі шиємо кожен виріб: від вибору шкіри до останнього шва. Тому знаємо, з чого зроблена кожна річ у нашому салоні.',
    about_1t: 'Власне виробництво', about_1d: 'Кожен виріб пошитий у нашій майстерні.',
    about_2t: 'Натуральні матеріали', about_2d: 'Лише натуральна шкіра та хутро.',
    about_3t: 'Індивідуальне замовлення', about_3d: 'Пошиємо модель за вашими мірками.',
    stores_title: 'Наші магазини', store_tbd: '[АДРЕСА]', also: 'Вам також може сподобатися',
    rights: 'Усі права захищені', currency: 'грн', 
    
    city1: 'Тернопіль', city2: 'Івано-Франківськ', city3: 'Хмельницький',
    addr1: 'вул. Брюкнера, 2/7', addr2: 'вул. Страчених Націоналістів, 8'
  },
  en: {
    sort_rec: 'Recommended', sort_asc: 'Price: low to high', sort_desc: 'Price: high to low', new_badge: 'New', cta_collection: 'View the collection', categories_title: 'Categories', featured: 'Featured',
    orbit_title: 'The whole collection', drag_hint: 'Drag to spin · tap a piece', close: 'Close', details: 'Details',
    nav_collections: 'Collections', nav_about: 'About', nav_stores: 'Stores',
    kicker: 'Leather & fur salon', hero_title: 'Our own production.<br>Genuine leather.',
    hero_sub: 'Coats, jackets and sheepskins made in our own workshop — for those who value quality.',
    closet_kicker: 'New collection',
    f_all: 'All', f_coats: 'Coats', f_jackets: 'Jackets', f_sheepskins: 'Sheepskins', f_bags: 'Bags',
    
    order_tg: 'Order via Telegram', call: 'Call us',
    material: 'Material', sizes: 'Size', color: 'Colour', code: 'Code', care: 'Care', care_text: 'Professional leather cleaning only',
    in_stock: 'In stock', on_order: 'Made to order', mat_leather: 'Genuine leather', mat_fur: 'Natural fur',
    about_title: 'Ferrizo — leather that lasts for years',
    about_text: 'We make every piece ourselves, from choosing the leather to the final stitch — so we know exactly what each item in our salon is made of.',
    about_1t: 'Our own production', about_1d: 'Every piece is made in our workshop.',
    about_2t: 'Natural materials', about_2d: 'Only genuine leather and natural fur.',
    about_3t: 'Made to order', about_3d: 'We will make a piece to your measurements.',
    stores_title: 'Our stores', store_tbd: '[ADDRESS]', also: 'You may also like',
    rights: 'All rights reserved', currency: 'UAH', 
    
    city1: 'Ternopil', city2: 'Ivano-Frankivsk', city3: 'Khmelnytskyi',
    addr1: '2/7 Brukner St.', addr2: '8 Strachenykh Natsionalistiv St.'
  },
  ru: {
    sort_rec: 'Рекомендуемые', sort_asc: 'Цена: по возрастанию', sort_desc: 'Цена: по убыванию', new_badge: 'Новинка', cta_collection: 'Смотреть коллекцию', categories_title: 'Категории', featured: 'Рекомендуем',
    orbit_title: 'Вся коллекция', drag_hint: 'Перетащите, чтобы вращать · нажмите на изделие', close: 'Закрыть', details: 'Подробнее',
    nav_collections: 'Коллекции', nav_about: 'О нас', nav_stores: 'Магазины',
    kicker: 'Салон кожи и меха', hero_title: 'Собственное производство.<br>Натуральная кожа.',
    hero_sub: 'Пальто, куртки и дублёнки, сшитые в нашей мастерской, — для тех, кто ценит качество.',
    closet_kicker: 'Новая коллекция',
    f_all: 'Все', f_coats: 'Пальто', f_jackets: 'Куртки', f_sheepskins: 'Дублёнки', f_bags: 'Сумки',
    
    order_tg: 'Заказать в Telegram', call: 'Позвонить',
    material: 'Материал', sizes: 'Размер', color: 'Цвет', code: 'Код', care: 'Уход', care_text: 'Только профессиональная чистка кожи',
    in_stock: 'В наличии', on_order: 'Под заказ', mat_leather: 'Натуральная кожа', mat_fur: 'Натуральный мех',
    about_title: 'Ferrizo — кожа, которая служит годами',
    about_text: 'Мы сами шьём каждое изделие: от выбора кожи до последнего шва. Поэтому знаем, из чего сделана каждая вещь в нашем салоне.',
    about_1t: 'Собственное производство', about_1d: 'Каждое изделие сшито в нашей мастерской.',
    about_2t: 'Натуральные материалы', about_2d: 'Только натуральная кожа и мех.',
    about_3t: 'Индивидуальный заказ', about_3d: 'Сошьём модель по вашим меркам.',
    stores_title: 'Наши магазины', store_tbd: '[АДРЕС]', also: 'Вам также может понравиться',
    rights: 'Все права защищены', currency: 'грн', 
    
    city1: 'Тернополь', city2: 'Ивано-Франковск', city3: 'Хмельницкий',
    addr1: 'ул. Брюкнера, 2/7', addr2: 'ул. Страченых Националистов, 8'
  },
  de: {
    sort_rec: 'Empfohlen', sort_asc: 'Preis: aufsteigend', sort_desc: 'Preis: absteigend', new_badge: 'Neu', cta_collection: 'Kollektion ansehen', categories_title: 'Kategorien', featured: 'Empfehlung',
    orbit_title: 'Die ganze Kollektion', drag_hint: 'Zum Drehen ziehen · Stück antippen', close: 'Schließen', details: 'Details',
    nav_collections: 'Kollektionen', nav_about: 'Über uns', nav_stores: 'Geschäfte',
    kicker: 'Leder- & Pelzsalon', hero_title: 'Eigene Herstellung.<br>Echtes Leder.',
    hero_sub: 'Mäntel, Jacken und Lammfellmäntel aus unserer eigenen Werkstatt – für alle, die Qualität schätzen.',
    closet_kicker: 'Neue Kollektion',
    f_all: 'Alle', f_coats: 'Mäntel', f_jackets: 'Jacken', f_sheepskins: 'Lammfell', f_bags: 'Taschen',
    
    order_tg: 'Über Telegram bestellen', call: 'Anrufen',
    material: 'Material', sizes: 'Größe', color: 'Farbe', code: 'Art.-Nr.', care: 'Pflege', care_text: 'Nur professionelle Lederreinigung',
    in_stock: 'Auf Lager', on_order: 'Auf Bestellung', mat_leather: 'Echtleder', mat_fur: 'Echtpelz',
    about_title: 'Ferrizo – Leder, das jahrelang hält',
    about_text: 'Jedes Stück fertigen wir selbst – von der Auswahl des Leders bis zur letzten Naht. Deshalb wissen wir genau, woraus jedes Teil in unserem Salon besteht.',
    about_1t: 'Eigene Herstellung', about_1d: 'Jedes Stück entsteht in unserer Werkstatt.',
    about_2t: 'Natürliche Materialien', about_2d: 'Nur Echtleder und Echtpelz.',
    about_3t: 'Maßanfertigung', about_3d: 'Wir fertigen ein Modell nach Ihren Maßen.',
    stores_title: 'Unsere Geschäfte', store_tbd: '[ADRESSE]', also: 'Das könnte Ihnen auch gefallen',
    rights: 'Alle Rechte vorbehalten', currency: 'UAH', 
    
    city1: 'Ternopil', city2: 'Iwano-Frankiwsk', city3: 'Chmelnyzkyj',
    addr1: 'Brukner-Str. 2/7', addr2: 'Strachenykh-Natsionalistiv-Str. 8'
  },
  fr: {
    sort_rec: 'Recommandés', sort_asc: 'Prix croissant', sort_desc: 'Prix décroissant', new_badge: 'Nouveau', cta_collection: 'Voir la collection', categories_title: 'Catégories', featured: 'Coup de cœur',
    orbit_title: 'Toute la collection', drag_hint: 'Faites glisser pour tourner · touchez une pièce', close: 'Fermer', details: 'Détails',
    nav_collections: 'Collections', nav_about: 'À propos', nav_stores: 'Boutiques',
    kicker: 'Salon du cuir et de la fourrure', hero_title: 'Notre propre fabrication.<br>Cuir véritable.',
    hero_sub: 'Manteaux, vestes et peaux lainées confectionnés dans notre atelier — pour ceux qui apprécient la qualité.',
    closet_kicker: 'Nouvelle collection',
    f_all: 'Tout', f_coats: 'Manteaux', f_jackets: 'Vestes', f_sheepskins: 'Peaux lainées', f_bags: 'Sacs',
    
    order_tg: 'Commander sur Telegram', call: 'Appeler',
    material: 'Matière', sizes: 'Taille', color: 'Couleur', code: 'Réf.', care: 'Entretien', care_text: 'Nettoyage professionnel du cuir uniquement',
    in_stock: 'En stock', on_order: 'Sur commande', mat_leather: 'Cuir véritable', mat_fur: 'Fourrure naturelle',
    about_title: 'Ferrizo — un cuir qui dure des années',
    about_text: 'Nous confectionnons chaque pièce nous-mêmes, du choix du cuir à la dernière couture. Nous savons donc exactement de quoi est faite chaque pièce de notre salon.',
    about_1t: 'Notre propre fabrication', about_1d: 'Chaque pièce est confectionnée dans notre atelier.',
    about_2t: 'Matières naturelles', about_2d: 'Uniquement du cuir véritable et de la fourrure naturelle.',
    about_3t: 'Sur mesure', about_3d: 'Nous réalisons un modèle à vos mesures.',
    stores_title: 'Nos boutiques', store_tbd: '[ADRESSE]', also: 'Vous aimerez aussi',
    rights: 'Tous droits réservés', currency: 'UAH', 
    
    city1: 'Ternopil', city2: 'Ivano-Frankivsk', city3: 'Khmelnytskyï',
    addr1: '2/7 rue Brukner', addr2: '8 rue Strachenykh Natsionalistiv'
  },
  pl: {
    sort_rec: 'Polecane', sort_asc: 'Cena: rosnąco', sort_desc: 'Cena: malejąco', new_badge: 'Nowość', cta_collection: 'Zobacz kolekcję', categories_title: 'Kategorie', featured: 'Polecamy',
    orbit_title: 'Cała kolekcja', drag_hint: 'Przeciągnij, aby obrócić · kliknij produkt', close: 'Zamknij', details: 'Szczegóły',
    nav_collections: 'Kolekcje', nav_about: 'O nas', nav_stores: 'Sklepy',
    kicker: 'Salon skór i futer', hero_title: 'Własna produkcja.<br>Skóra naturalna.',
    hero_sub: 'Płaszcze, kurtki i kożuchy szyte w naszej pracowni — dla tych, którzy cenią jakość.',
    closet_kicker: 'Nowa kolekcja',
    f_all: 'Wszystkie', f_coats: 'Płaszcze', f_jackets: 'Kurtki', f_sheepskins: 'Kożuchy', f_bags: 'Torby',
    
    order_tg: 'Zamów przez Telegram', call: 'Zadzwoń',
    material: 'Materiał', sizes: 'Rozmiar', color: 'Kolor', code: 'Kod', care: 'Pielęgnacja', care_text: 'Tylko profesjonalne czyszczenie skóry',
    in_stock: 'Dostępny', on_order: 'Na zamówienie', mat_leather: 'Skóra naturalna', mat_fur: 'Naturalne futro',
    about_title: 'Ferrizo — skóra, która służy latami',
    about_text: 'Każdy produkt szyjemy sami: od wyboru skóry po ostatni szew. Dlatego wiemy, z czego jest zrobiona każda rzecz w naszym salonie.',
    about_1t: 'Własna produkcja', about_1d: 'Każdy produkt powstaje w naszej pracowni.',
    about_2t: 'Naturalne materiały', about_2d: 'Tylko skóra naturalna i naturalne futro.',
    about_3t: 'Zamówienie indywidualne', about_3d: 'Uszyjemy model według Twoich wymiarów.',
    stores_title: 'Nasze sklepy', store_tbd: '[ADRES]', also: 'Może Ci się spodobać',
    rights: 'Wszelkie prawa zastrzeżone', currency: 'UAH', 
    
    city1: 'Tarnopol', city2: 'Iwano-Frankiwsk', city3: 'Chmielnicki',
    addr1: 'ul. Brücknera 2/7', addr2: 'ul. Straczenych Nacjonalistów 8'
  },
  tr: {
    sort_rec: 'Önerilen', sort_asc: 'Fiyat: artan', sort_desc: 'Fiyat: azalan', new_badge: 'Yeni', cta_collection: 'Koleksiyonu gör', categories_title: 'Kategoriler', featured: 'Öne çıkan',
    orbit_title: 'Tüm koleksiyon', drag_hint: 'Döndürmek için sürükleyin · bir ürüne dokunun', close: 'Kapat', details: 'Detaylar',
    nav_collections: 'Koleksiyonlar', nav_about: 'Hakkımızda', nav_stores: 'Mağazalar',
    kicker: 'Deri ve kürk salonu', hero_title: 'Kendi üretimimiz.<br>Hakiki deri.',
    hero_sub: 'Kendi atölyemizde dikilen kaban, ceket ve kürklü kabanlar — kaliteye değer verenler için.',
    closet_kicker: 'Yeni koleksiyon',
    f_all: 'Tümü', f_coats: 'Kabanlar', f_jackets: 'Ceketler', f_sheepskins: 'Kürklü kabanlar', f_bags: 'Çantalar',
    
    order_tg: 'Telegram ile sipariş ver', call: 'Ara',
    material: 'Malzeme', sizes: 'Beden', color: 'Renk', code: 'Ürün kodu', care: 'Bakım', care_text: 'Yalnızca profesyonel deri temizleme',
    in_stock: 'Stokta', on_order: 'Siparişe özel', mat_leather: 'Hakiki deri', mat_fur: 'Doğal kürk',
    about_title: 'Ferrizo — yıllarca kullanılan deri',
    about_text: 'Her ürünü deri seçiminden son dikişe kadar kendimiz üretiyoruz. Bu yüzden salonumuzdaki her parçanın neyden yapıldığını biliyoruz.',
    about_1t: 'Kendi üretimimiz', about_1d: 'Her ürün kendi atölyemizde dikilir.',
    about_2t: 'Doğal malzemeler', about_2d: 'Yalnızca hakiki deri ve doğal kürk.',
    about_3t: 'Kişiye özel sipariş', about_3d: 'Ölçülerinize göre model dikeriz.',
    stores_title: 'Mağazalarımız', store_tbd: '[ADRES]', also: 'Bunları da beğenebilirsiniz',
    rights: 'Tüm hakları saklıdır', currency: 'UAH', 
    
    city1: 'Ternopil', city2: 'İvano-Frankivsk', city3: 'Hmelnitski',
    addr1: 'Brukner Cad. 2/7', addr2: 'Strachenykh Natsionalistiv Cad. 8'
  }
};

// Yeni metinler (menü, 404, gizlilik, ürün açıklaması…)
const EXTRA = {
  uk: {
    nav_shop: 'Каталог', menu: 'Меню', back_shop: 'До каталогу', desc: 'Опис', contact: 'Контакти', skip: 'Перейти до вмісту',
    nf_title: 'Сторінку не знайдено', nf_text: 'Можливо, виріб уже продано або посилання застаріло.', nf_btn: 'Перейти до каталогу',
    empty: 'У цій категорії поки немає виробів.', share: 'Поділитися', copied: 'Посилання скопійовано', photo: 'Фото',
    privacy: 'Політика конфіденційності', order_note: 'Напишіть нам код виробу та розмір — ми відповімо протягом дня.',
    privacy_p: [
      'Цей сайт не вимагає реєстрації та не збирає персональні дані автоматично.',
      'Ми не використовуємо рекламні чи аналітичні cookie. У вашому браузері зберігається лише вибрана мова сайту.',
      'Якщо ви оформлюєте замовлення через Telegram або телефоном, ваше ім’я та контакти використовуються лише для обробки замовлення й не передаються третім особам.',
      'З питань щодо ваших даних звертайтеся за телефоном +380 97 040 0353.'
    ]
  },
  en: {
    nav_shop: 'Catalogue', menu: 'Menu', back_shop: 'Back to catalogue', desc: 'Description', contact: 'Contact', skip: 'Skip to content',
    nf_title: 'Page not found', nf_text: 'The piece may already be sold, or the link is out of date.', nf_btn: 'Go to the catalogue',
    empty: 'No pieces in this category yet.', share: 'Share', copied: 'Link copied', photo: 'Photo',
    privacy: 'Privacy policy', order_note: 'Send us the item code and your size — we reply within a day.',
    privacy_p: [
      'This website does not require registration and does not collect personal data automatically.',
      'We do not use advertising or analytics cookies. Only your chosen site language is stored in your browser.',
      'If you order via Telegram or by phone, your name and contact details are used only to process your order and are not shared with third parties.',
      'For any questions about your data, call us at +380 97 040 0353.'
    ]
  },
  ru: {
    nav_shop: 'Каталог', menu: 'Меню', back_shop: 'В каталог', desc: 'Описание', contact: 'Контакты', skip: 'Перейти к содержимому',
    nf_title: 'Страница не найдена', nf_text: 'Возможно, изделие уже продано или ссылка устарела.', nf_btn: 'Перейти в каталог',
    empty: 'В этой категории пока нет изделий.', share: 'Поделиться', copied: 'Ссылка скопирована', photo: 'Фото',
    privacy: 'Политика конфиденциальности', order_note: 'Напишите нам код изделия и размер — мы ответим в течение дня.',
    privacy_p: [
      'Этот сайт не требует регистрации и не собирает персональные данные автоматически.',
      'Мы не используем рекламные и аналитические cookie. В вашем браузере сохраняется только выбранный язык сайта.',
      'Если вы оформляете заказ через Telegram или по телефону, ваше имя и контакты используются только для обработки заказа и не передаются третьим лицам.',
      'По вопросам о ваших данных звоните по телефону +380 97 040 0353.'
    ]
  },
  de: {
    nav_shop: 'Katalog', menu: 'Menü', back_shop: 'Zurück zum Katalog', desc: 'Beschreibung', contact: 'Kontakt', skip: 'Zum Inhalt springen',
    nf_title: 'Seite nicht gefunden', nf_text: 'Das Stück ist möglicherweise schon verkauft oder der Link ist veraltet.', nf_btn: 'Zum Katalog',
    empty: 'In dieser Kategorie gibt es noch keine Stücke.', share: 'Teilen', copied: 'Link kopiert', photo: 'Foto',
    privacy: 'Datenschutzerklärung', order_note: 'Senden Sie uns die Artikelnummer und Ihre Größe – wir antworten innerhalb eines Tages.',
    privacy_p: [
      'Diese Website erfordert keine Registrierung und erhebt keine personenbezogenen Daten automatisch.',
      'Wir verwenden keine Werbe- oder Analyse-Cookies. In Ihrem Browser wird nur die gewählte Sprache gespeichert.',
      'Wenn Sie über Telegram oder telefonisch bestellen, werden Ihr Name und Ihre Kontaktdaten nur zur Bearbeitung der Bestellung verwendet und nicht an Dritte weitergegeben.',
      'Bei Fragen zu Ihren Daten erreichen Sie uns unter +380 97 040 0353.'
    ]
  },
  fr: {
    nav_shop: 'Catalogue', menu: 'Menu', back_shop: 'Retour au catalogue', desc: 'Description', contact: 'Contact', skip: 'Aller au contenu',
    nf_title: 'Page introuvable', nf_text: 'La pièce est peut-être déjà vendue ou le lien n’est plus à jour.', nf_btn: 'Voir le catalogue',
    empty: 'Aucune pièce dans cette catégorie pour le moment.', share: 'Partager', copied: 'Lien copié', photo: 'Photo',
    privacy: 'Politique de confidentialité', order_note: 'Envoyez-nous la référence et votre taille — nous répondons sous 24 h.',
    privacy_p: [
      'Ce site ne nécessite aucune inscription et ne collecte aucune donnée personnelle automatiquement.',
      'Nous n’utilisons pas de cookies publicitaires ni analytiques. Seule la langue choisie est enregistrée dans votre navigateur.',
      'Si vous commandez via Telegram ou par téléphone, votre nom et vos coordonnées servent uniquement au traitement de la commande et ne sont pas transmis à des tiers.',
      'Pour toute question sur vos données, appelez le +380 97 040 0353.'
    ]
  },
  pl: {
    nav_shop: 'Katalog', menu: 'Menu', back_shop: 'Wróć do katalogu', desc: 'Opis', contact: 'Kontakt', skip: 'Przejdź do treści',
    nf_title: 'Nie znaleziono strony', nf_text: 'Produkt mógł zostać już sprzedany lub link jest nieaktualny.', nf_btn: 'Przejdź do katalogu',
    empty: 'W tej kategorii nie ma jeszcze produktów.', share: 'Udostępnij', copied: 'Link skopiowany', photo: 'Zdjęcie',
    privacy: 'Polityka prywatności', order_note: 'Wyślij nam kod produktu i rozmiar — odpowiemy w ciągu doby.',
    privacy_p: [
      'Ta strona nie wymaga rejestracji i nie zbiera automatycznie danych osobowych.',
      'Nie używamy reklamowych ani analitycznych plików cookie. W przeglądarce zapisywany jest tylko wybrany język strony.',
      'Jeśli zamawiasz przez Telegram lub telefonicznie, Twoje imię i dane kontaktowe służą wyłącznie do realizacji zamówienia i nie są przekazywane osobom trzecim.',
      'W sprawie swoich danych zadzwoń pod numer +380 97 040 0353.'
    ]
  },
  tr: {
    nav_shop: 'Katalog', menu: 'Menü', back_shop: 'Kataloğa dön', desc: 'Açıklama', contact: 'İletişim', skip: 'İçeriğe geç',
    nf_title: 'Sayfa bulunamadı', nf_text: 'Ürün satılmış ya da bağlantı eskimiş olabilir.', nf_btn: 'Kataloğa git',
    empty: 'Bu kategoride henüz ürün yok.', share: 'Paylaş', copied: 'Bağlantı kopyalandı', photo: 'Fotoğraf',
    privacy: 'Gizlilik politikası', order_note: 'Ürün kodunu ve bedeninizi yazın — bir gün içinde dönüş yapıyoruz.',
    privacy_p: [
      'Bu site üyelik gerektirmez ve otomatik olarak kişisel veri toplamaz.',
      'Reklam veya analiz çerezi kullanmıyoruz. Tarayıcınızda yalnızca seçtiğiniz site dili saklanır.',
      'Telegram veya telefonla sipariş verirseniz adınız ve iletişim bilgileriniz yalnızca siparişin işlenmesi için kullanılır, üçüncü kişilerle paylaşılmaz.',
      'Verilerinizle ilgili sorular için +380 97 040 0353 numarasını arayabilirsiniz.'
    ]
  }
};
for (const k in EXTRA) Object.assign(T[k], EXTRA[k]);

// Rakip analizi sonrası eklenen bölümler. (*) işaretliler firma onayı bekler.
const EXTRA2 = {
  uk: {
    new_in: 'Нові надходження', see_all: 'Увесь каталог',
    atelier_k: 'Майстерня Ferrizo', atelier_t: 'Від шкіри — до готового виробу', atelier_d: 'Кожна річ проходить чотири етапи в нашій майстерні. Ми не перепродаємо — ми шиємо.',
    atelier_s: [['Відбір шкіри', 'Обираємо кожну шкуру вручну за м’якістю та рівністю фарбування.'], ['Крій', 'Лекала власної розробки під українську та європейську розмірну сітку.'], ['Пошиття', 'Посилені шви, якісна фурнітура, акуратна підкладка.'], ['Контроль', 'Перевіряємо кожен виріб перед тим, як він потрапить у салон.']],
    mtm_k: 'Індивідуальне пошиття', mtm_t: 'Модель за вашими мірками', mtm_d: 'Сподобалася модель, але потрібен інший розмір, довжина чи колір шкіри? Ми пошиємо її спеціально для вас.',
    mtm_steps: [['Оберіть модель', 'З каталогу або за вашим фото.'], ['Мірки', 'У салоні або за нашою інструкцією.'], ['Пошиття', 'У власній майстерні Ferrizo.'], ['Примірка', 'Підганяємо виріб до ідеальної посадки.']],
    mtm_btn: 'Обговорити замовлення',
    guide_k: 'Довідник', guide_t: 'Яку шкіру обрати',
    guide_items: [['Овеча шкіра', 'Легка, м’яка й тепла. Ідеальна для курток і пальт на щодень.'], ['Яловича шкіра', 'Щільна та міцна, тримає форму роками. Класика для байкерських курток.'], ['Шкіра ягняти', 'Найтонша й найніжніша на дотик. Для елегантних моделей.'], ['Мутон і хутро', 'Найтепліший вибір для справжньої зими.']],
    care_title: 'Як доглядати за шкірою', care_tips: ['Зберігайте на широких плічках у дихаючому чохлі.', 'Мокрий виріб сушіть подалі від батарей.', 'Раз на сезон обробляйте спеціальним кремом.', 'Плями — лише професійне чищення.'],
    acc_details: 'Деталі виробу', acc_size: 'Таблиця розмірів', acc_delivery: 'Доставка та повернення', acc_care: 'Догляд', acc_stores: 'Наявність у магазинах',
    delivery_p: ['Доставка «Новою поштою» по всій Україні.', 'Самовивіз із наших салонів у Тернополі, Івано-Франківську та Хмельницькому.', 'Обмін і повернення — протягом 14 днів, якщо виріб не був у використанні.'],
    care_p: ['Лише професійне чищення шкіри.', 'Зберігайте на широких плічках, подалі від прямого сонця.', 'Мокрий виріб сушіть природним способом.'],
    stores_p: 'Наявність розміру уточнюйте в салоні — ми відкладемо виріб для вас.',
    size_cols: ['Розмір', 'UA', 'Груди, см', 'Талія, см', 'Стегна, см'],
    size_how: 'Як зняти мірки', size_how_p: ['Груди — по найвиступаючих точках, стрічка горизонтально.', 'Талія — по найвужчому місцю.', 'Стегна — по найвиступаючих точках сідниць.'],
    size_note: 'Сумніваєтеся з розміром? Напишіть нам свої мірки — підкажемо.',
    a_leather: 'Вид шкіри', a_lining: 'Підкладка', a_closure: 'Застібка', a_origin: 'Виробництво', origin_val: 'Власна майстерня, Україна',
    lt_sheep: 'Овеча шкіра', lt_cow: 'Яловича шкіра', lt_lamb: 'Шкіра ягняти', lt_mouton: 'Мутон',
    ln_viscose: 'Віскоза', ln_textile: 'Текстиль', ln_fur: 'Натуральне хутро', ln_none: 'Без підкладки',
    cl_buttons: 'Ґудзики', cl_zip: 'Блискавка', cl_belt: 'Пояс', cl_magnet: 'Магніт',
    model_info: 'Модель на фото: зріст {h} см, розмір {s}', recent: 'Ви переглядали', ask_store: 'Уточнити наявність'
  },
  en: {
    new_in: 'New arrivals', see_all: 'Full catalogue',
    atelier_k: 'The Ferrizo workshop', atelier_t: 'From hide to finished piece', atelier_d: 'Every piece goes through four stages in our own workshop. We don’t resell — we make.',
    atelier_s: [['Selecting the leather', 'Each hide is chosen by hand for softness and even colour.'], ['Cutting', 'Our own patterns, graded for Ukrainian and European sizing.'], ['Sewing', 'Reinforced seams, quality hardware, a neat lining.'], ['Inspection', 'Every piece is checked before it reaches the salon.']],
    mtm_k: 'Made to measure', mtm_t: 'A piece cut to your measurements', mtm_d: 'Love a model but need a different size, length or leather colour? We will make it especially for you.',
    mtm_steps: [['Choose a model', 'From the catalogue or from your photo.'], ['Measurements', 'In the salon or with our guide.'], ['Making', 'In Ferrizo’s own workshop.'], ['Fitting', 'We adjust the piece to a perfect fit.']],
    mtm_btn: 'Discuss your order',
    guide_k: 'Guide', guide_t: 'Which leather to choose',
    guide_items: [['Sheepskin leather', 'Light, soft and warm. Ideal for everyday jackets and coats.'], ['Cowhide', 'Dense and strong, keeps its shape for years. The classic for biker jackets.'], ['Lambskin', 'The finest and softest to the touch. For elegant pieces.'], ['Mouton & fur', 'The warmest choice for a real winter.']],
    care_title: 'How to care for leather', care_tips: ['Store on wide hangers in a breathable cover.', 'Dry a wet piece away from radiators.', 'Treat with a leather cream once a season.', 'Stains — professional cleaning only.'],
    acc_details: 'Product details', acc_size: 'Size guide', acc_delivery: 'Delivery & returns', acc_care: 'Care', acc_stores: 'Availability in stores',
    delivery_p: ['Delivery across Ukraine via Nova Poshta.', 'Pick-up from our salons in Ternopil, Ivano-Frankivsk and Khmelnytskyi.', 'Exchanges and returns within 14 days if the piece has not been worn.'],
    care_p: ['Professional leather cleaning only.', 'Store on wide hangers, away from direct sunlight.', 'Let a wet piece dry naturally.'],
    stores_p: 'Check your size in the salon — we will put the piece aside for you.',
    size_cols: ['Size', 'UA', 'Chest, cm', 'Waist, cm', 'Hips, cm'],
    size_how: 'How to measure', size_how_p: ['Chest — around the fullest part, tape level.', 'Waist — around the narrowest part.', 'Hips — around the fullest part of the seat.'],
    size_note: 'Not sure about your size? Send us your measurements and we will help.',
    a_leather: 'Leather', a_lining: 'Lining', a_closure: 'Fastening', a_origin: 'Made in', origin_val: 'Our own workshop, Ukraine',
    lt_sheep: 'Sheepskin leather', lt_cow: 'Cowhide', lt_lamb: 'Lambskin', lt_mouton: 'Mouton',
    ln_viscose: 'Viscose', ln_textile: 'Textile', ln_fur: 'Natural fur', ln_none: 'Unlined',
    cl_buttons: 'Buttons', cl_zip: 'Zip', cl_belt: 'Belt', cl_magnet: 'Magnetic',
    model_info: 'Model is {h} cm tall and wears size {s}', recent: 'Recently viewed', ask_store: 'Check availability'
  },
  ru: {
    new_in: 'Новые поступления', see_all: 'Весь каталог',
    atelier_k: 'Мастерская Ferrizo', atelier_t: 'От кожи — до готового изделия', atelier_d: 'Каждая вещь проходит четыре этапа в нашей мастерской. Мы не перепродаём — мы шьём.',
    atelier_s: [['Отбор кожи', 'Выбираем каждую шкуру вручную по мягкости и ровности окраса.'], ['Крой', 'Лекала собственной разработки под украинскую и европейскую размерную сетку.'], ['Пошив', 'Усиленные швы, качественная фурнитура, аккуратная подкладка.'], ['Контроль', 'Проверяем каждое изделие, прежде чем оно попадёт в салон.']],
    mtm_k: 'Индивидуальный пошив', mtm_t: 'Модель по вашим меркам', mtm_d: 'Понравилась модель, но нужен другой размер, длина или цвет кожи? Мы сошьём её специально для вас.',
    mtm_steps: [['Выберите модель', 'Из каталога или по вашему фото.'], ['Мерки', 'В салоне или по нашей инструкции.'], ['Пошив', 'В собственной мастерской Ferrizo.'], ['Примерка', 'Подгоняем изделие до идеальной посадки.']],
    mtm_btn: 'Обсудить заказ',
    guide_k: 'Справочник', guide_t: 'Какую кожу выбрать',
    guide_items: [['Овечья кожа', 'Лёгкая, мягкая и тёплая. Идеальна для курток и пальто на каждый день.'], ['Говяжья кожа', 'Плотная и прочная, держит форму годами. Классика для байкерских курток.'], ['Кожа ягнёнка', 'Самая тонкая и нежная на ощупь. Для элегантных моделей.'], ['Мутон и мех', 'Самый тёплый выбор для настоящей зимы.']],
    care_title: 'Как ухаживать за кожей', care_tips: ['Храните на широких плечиках в дышащем чехле.', 'Мокрое изделие сушите вдали от батарей.', 'Раз в сезон обрабатывайте специальным кремом.', 'Пятна — только профессиональная чистка.'],
    acc_details: 'Детали изделия', acc_size: 'Таблица размеров', acc_delivery: 'Доставка и возврат', acc_care: 'Уход', acc_stores: 'Наличие в магазинах',
    delivery_p: ['Доставка «Новой почтой» по всей Украине.', 'Самовывоз из наших салонов в Тернополе, Ивано-Франковске и Хмельницком.', 'Обмен и возврат — в течение 14 дней, если изделие не было в использовании.'],
    care_p: ['Только профессиональная чистка кожи.', 'Храните на широких плечиках, вдали от прямого солнца.', 'Мокрое изделие сушите естественным способом.'],
    stores_p: 'Наличие размера уточняйте в салоне — мы отложим изделие для вас.',
    size_cols: ['Размер', 'UA', 'Грудь, см', 'Талия, см', 'Бёдра, см'],
    size_how: 'Как снять мерки', size_how_p: ['Грудь — по самым выступающим точкам, лента горизонтально.', 'Талия — по самому узкому месту.', 'Бёдра — по самым выступающим точкам ягодиц.'],
    size_note: 'Сомневаетесь с размером? Напишите нам свои мерки — подскажем.',
    a_leather: 'Вид кожи', a_lining: 'Подкладка', a_closure: 'Застёжка', a_origin: 'Производство', origin_val: 'Собственная мастерская, Украина',
    lt_sheep: 'Овечья кожа', lt_cow: 'Говяжья кожа', lt_lamb: 'Кожа ягнёнка', lt_mouton: 'Мутон',
    ln_viscose: 'Вискоза', ln_textile: 'Текстиль', ln_fur: 'Натуральный мех', ln_none: 'Без подкладки',
    cl_buttons: 'Пуговицы', cl_zip: 'Молния', cl_belt: 'Пояс', cl_magnet: 'Магнит',
    model_info: 'Модель на фото: рост {h} см, размер {s}', recent: 'Вы смотрели', ask_store: 'Уточнить наличие'
  },
  de: {
    new_in: 'Neuheiten', see_all: 'Ganzer Katalog',
    atelier_k: 'Die Ferrizo-Werkstatt', atelier_t: 'Vom Leder zum fertigen Stück', atelier_d: 'Jedes Stück durchläuft vier Schritte in unserer eigenen Werkstatt. Wir verkaufen nicht weiter – wir nähen selbst.',
    atelier_s: [['Lederauswahl', 'Jede Haut wird von Hand nach Weichheit und gleichmäßiger Farbe ausgewählt.'], ['Zuschnitt', 'Eigene Schnittmuster für ukrainische und europäische Größen.'], ['Nähen', 'Verstärkte Nähte, hochwertige Beschläge, sauberes Futter.'], ['Kontrolle', 'Jedes Stück wird geprüft, bevor es in den Salon kommt.']],
    mtm_k: 'Maßanfertigung', mtm_t: 'Ein Modell nach Ihren Maßen', mtm_d: 'Ihnen gefällt ein Modell, aber Sie brauchen eine andere Größe, Länge oder Lederfarbe? Wir fertigen es eigens für Sie.',
    mtm_steps: [['Modell wählen', 'Aus dem Katalog oder nach Ihrem Foto.'], ['Maße', 'Im Salon oder mit unserer Anleitung.'], ['Fertigung', 'In der eigenen Ferrizo-Werkstatt.'], ['Anprobe', 'Wir passen das Stück perfekt an.']],
    mtm_btn: 'Bestellung besprechen',
    guide_k: 'Ratgeber', guide_t: 'Welches Leder wählen',
    guide_items: [['Schafsleder', 'Leicht, weich und warm. Ideal für Alltagsjacken und -mäntel.'], ['Rindsleder', 'Dicht und robust, hält jahrelang die Form. Der Klassiker für Bikerjacken.'], ['Lammleder', 'Das feinste und weichste Leder. Für elegante Modelle.'], ['Mouton & Pelz', 'Die wärmste Wahl für einen echten Winter.']],
    care_title: 'Lederpflege', care_tips: ['Auf breiten Bügeln in einer atmungsaktiven Hülle aufbewahren.', 'Nasses Leder fern von Heizkörpern trocknen.', 'Einmal pro Saison mit Lederpflege behandeln.', 'Flecken – nur professionelle Reinigung.'],
    acc_details: 'Produktdetails', acc_size: 'Größentabelle', acc_delivery: 'Lieferung & Rückgabe', acc_care: 'Pflege', acc_stores: 'Verfügbarkeit im Geschäft',
    delivery_p: ['Lieferung in der ganzen Ukraine mit Nova Poshta.', 'Abholung in unseren Salons in Ternopil, Iwano-Frankiwsk und Chmelnyzkyj.', 'Umtausch und Rückgabe innerhalb von 14 Tagen, wenn das Stück nicht getragen wurde.'],
    care_p: ['Nur professionelle Lederreinigung.', 'Auf breiten Bügeln, fern von direkter Sonne aufbewahren.', 'Nasses Leder auf natürliche Weise trocknen lassen.'],
    stores_p: 'Fragen Sie Ihre Größe im Salon an – wir legen das Stück für Sie zurück.',
    size_cols: ['Größe', 'UA', 'Brust, cm', 'Taille, cm', 'Hüfte, cm'],
    size_how: 'Richtig messen', size_how_p: ['Brust – an der breitesten Stelle, Maßband waagerecht.', 'Taille – an der schmalsten Stelle.', 'Hüfte – an der breitesten Stelle des Gesäßes.'],
    size_note: 'Unsicher bei der Größe? Schicken Sie uns Ihre Maße – wir beraten Sie.',
    a_leather: 'Lederart', a_lining: 'Futter', a_closure: 'Verschluss', a_origin: 'Herstellung', origin_val: 'Eigene Werkstatt, Ukraine',
    lt_sheep: 'Schafsleder', lt_cow: 'Rindsleder', lt_lamb: 'Lammleder', lt_mouton: 'Mouton',
    ln_viscose: 'Viskose', ln_textile: 'Textil', ln_fur: 'Echtpelz', ln_none: 'Ungefüttert',
    cl_buttons: 'Knöpfe', cl_zip: 'Reißverschluss', cl_belt: 'Gürtel', cl_magnet: 'Magnet',
    model_info: 'Model ist {h} cm groß und trägt Größe {s}', recent: 'Zuletzt angesehen', ask_store: 'Verfügbarkeit anfragen'
  },
  fr: {
    new_in: 'Nouveautés', see_all: 'Tout le catalogue',
    atelier_k: 'L’atelier Ferrizo', atelier_t: 'Du cuir à la pièce finie', atelier_d: 'Chaque pièce passe par quatre étapes dans notre propre atelier. Nous ne revendons pas — nous confectionnons.',
    atelier_s: [['Choix du cuir', 'Chaque peau est choisie à la main pour sa souplesse et sa couleur uniforme.'], ['Coupe', 'Nos propres patrons, gradués aux tailles ukrainiennes et européennes.'], ['Couture', 'Coutures renforcées, finitions de qualité, doublure soignée.'], ['Contrôle', 'Chaque pièce est vérifiée avant d’arriver en boutique.']],
    mtm_k: 'Sur mesure', mtm_t: 'Un modèle à vos mesures', mtm_d: 'Un modèle vous plaît mais il vous faut une autre taille, longueur ou couleur ? Nous le confectionnons spécialement pour vous.',
    mtm_steps: [['Choisissez un modèle', 'Dans le catalogue ou d’après votre photo.'], ['Mesures', 'En boutique ou avec notre guide.'], ['Confection', 'Dans l’atelier Ferrizo.'], ['Essayage', 'Nous ajustons la pièce à la perfection.']],
    mtm_btn: 'Parler de votre commande',
    guide_k: 'Guide', guide_t: 'Quel cuir choisir',
    guide_items: [['Cuir d’agneau-mouton', 'Léger, souple et chaud. Idéal pour les vestes et manteaux du quotidien.'], ['Cuir de vachette', 'Dense et résistant, garde sa forme des années. Le classique des perfectos.'], ['Cuir d’agneau', 'Le plus fin et le plus doux au toucher. Pour les modèles élégants.'], ['Mouton & fourrure', 'Le choix le plus chaud pour un vrai hiver.']],
    care_title: 'Entretenir le cuir', care_tips: ['Rangez sur un cintre large dans une housse respirante.', 'Faites sécher loin des radiateurs.', 'Nourrissez le cuir une fois par saison.', 'Taches — nettoyage professionnel uniquement.'],
    acc_details: 'Détails du produit', acc_size: 'Guide des tailles', acc_delivery: 'Livraison & retours', acc_care: 'Entretien', acc_stores: 'Disponibilité en boutique',
    delivery_p: ['Livraison dans toute l’Ukraine par Nova Poshta.', 'Retrait dans nos boutiques de Ternopil, Ivano-Frankivsk et Khmelnytskyï.', 'Échange et retour sous 14 jours si la pièce n’a pas été portée.'],
    care_p: ['Nettoyage professionnel du cuir uniquement.', 'Rangez sur un cintre large, à l’abri du soleil.', 'Laissez sécher naturellement une pièce mouillée.'],
    stores_p: 'Vérifiez votre taille en boutique — nous mettrons la pièce de côté pour vous.',
    size_cols: ['Taille', 'UA', 'Poitrine, cm', 'Taille, cm', 'Hanches, cm'],
    size_how: 'Comment se mesurer', size_how_p: ['Poitrine — au plus fort, mètre à l’horizontale.', 'Taille — au plus étroit.', 'Hanches — au plus fort du bassin.'],
    size_note: 'Un doute sur la taille ? Envoyez-nous vos mesures, nous vous conseillerons.',
    a_leather: 'Cuir', a_lining: 'Doublure', a_closure: 'Fermeture', a_origin: 'Fabrication', origin_val: 'Notre atelier, Ukraine',
    lt_sheep: 'Cuir de mouton', lt_cow: 'Cuir de vachette', lt_lamb: 'Cuir d’agneau', lt_mouton: 'Mouton',
    ln_viscose: 'Viscose', ln_textile: 'Textile', ln_fur: 'Fourrure naturelle', ln_none: 'Sans doublure',
    cl_buttons: 'Boutons', cl_zip: 'Zip', cl_belt: 'Ceinture', cl_magnet: 'Aimant',
    model_info: 'Le mannequin mesure {h} cm et porte la taille {s}', recent: 'Vus récemment', ask_store: 'Vérifier la disponibilité'
  },
  pl: {
    new_in: 'Nowości', see_all: 'Cały katalog',
    atelier_k: 'Pracownia Ferrizo', atelier_t: 'Od skóry do gotowego produktu', atelier_d: 'Każda rzecz przechodzi cztery etapy w naszej pracowni. Nie odsprzedajemy — szyjemy.',
    atelier_s: [['Wybór skóry', 'Każdą skórę wybieramy ręcznie pod kątem miękkości i równego koloru.'], ['Krój', 'Własne wykroje pod ukraińską i europejską rozmiarówkę.'], ['Szycie', 'Wzmocnione szwy, dobre okucia, staranna podszewka.'], ['Kontrola', 'Sprawdzamy każdy produkt, zanim trafi do salonu.']],
    mtm_k: 'Szycie na miarę', mtm_t: 'Model według Twoich wymiarów', mtm_d: 'Podoba Ci się model, ale potrzebujesz innego rozmiaru, długości lub koloru skóry? Uszyjemy go specjalnie dla Ciebie.',
    mtm_steps: [['Wybierz model', 'Z katalogu lub ze swojego zdjęcia.'], ['Wymiary', 'W salonie lub według naszej instrukcji.'], ['Szycie', 'We własnej pracowni Ferrizo.'], ['Przymiarka', 'Dopasowujemy produkt idealnie.']],
    mtm_btn: 'Omów zamówienie',
    guide_k: 'Poradnik', guide_t: 'Jaką skórę wybrać',
    guide_items: [['Skóra owcza', 'Lekka, miękka i ciepła. Idealna na kurtki i płaszcze na co dzień.'], ['Skóra wołowa', 'Gęsta i mocna, latami trzyma formę. Klasyka ramonesek.'], ['Skóra jagnięca', 'Najcieńsza i najdelikatniejsza w dotyku. Do eleganckich modeli.'], ['Muton i futro', 'Najcieplejszy wybór na prawdziwą zimę.']],
    care_title: 'Jak dbać o skórę', care_tips: ['Przechowuj na szerokim wieszaku w oddychającym pokrowcu.', 'Mokry produkt susz z dala od grzejników.', 'Raz w sezonie stosuj krem do skóry.', 'Plamy — tylko profesjonalne czyszczenie.'],
    acc_details: 'Szczegóły produktu', acc_size: 'Tabela rozmiarów', acc_delivery: 'Dostawa i zwroty', acc_care: 'Pielęgnacja', acc_stores: 'Dostępność w sklepach',
    delivery_p: ['Dostawa Nową Pocztą na terenie całej Ukrainy.', 'Odbiór osobisty w naszych salonach w Tarnopolu, Iwano-Frankiwsku i Chmielnickim.', 'Wymiana i zwrot w ciągu 14 dni, jeśli produkt nie był noszony.'],
    care_p: ['Tylko profesjonalne czyszczenie skóry.', 'Przechowuj na szerokim wieszaku, z dala od słońca.', 'Mokry produkt susz naturalnie.'],
    stores_p: 'Dostępność rozmiaru sprawdź w salonie — odłożymy produkt dla Ciebie.',
    size_cols: ['Rozmiar', 'UA', 'Klatka, cm', 'Talia, cm', 'Biodra, cm'],
    size_how: 'Jak się zmierzyć', size_how_p: ['Klatka — w najszerszym miejscu, taśma poziomo.', 'Talia — w najwęższym miejscu.', 'Biodra — w najszerszym miejscu pośladków.'],
    size_note: 'Nie jesteś pewien rozmiaru? Wyślij nam swoje wymiary — doradzimy.',
    a_leather: 'Rodzaj skóry', a_lining: 'Podszewka', a_closure: 'Zapięcie', a_origin: 'Produkcja', origin_val: 'Własna pracownia, Ukraina',
    lt_sheep: 'Skóra owcza', lt_cow: 'Skóra wołowa', lt_lamb: 'Skóra jagnięca', lt_mouton: 'Muton',
    ln_viscose: 'Wiskoza', ln_textile: 'Tekstylna', ln_fur: 'Naturalne futro', ln_none: 'Bez podszewki',
    cl_buttons: 'Guziki', cl_zip: 'Zamek', cl_belt: 'Pasek', cl_magnet: 'Magnes',
    model_info: 'Model ma {h} cm wzrostu i nosi rozmiar {s}', recent: 'Ostatnio oglądane', ask_store: 'Sprawdź dostępność'
  },
  tr: {
    new_in: 'Yeni gelenler', see_all: 'Tüm katalog',
    atelier_k: 'Ferrizo atölyesi', atelier_t: 'Deriden hazır ürüne', atelier_d: 'Her ürün kendi atölyemizde dört aşamadan geçer. Biz satın alıp satmıyoruz — kendimiz dikiyoruz.',
    atelier_s: [['Deri seçimi', 'Her deriyi yumuşaklığına ve boya eşitliğine göre elle seçeriz.'], ['Kesim', 'Ukrayna ve Avrupa bedenlerine göre kendi kalıplarımız.'], ['Dikim', 'Güçlendirilmiş dikişler, kaliteli aksesuar, özenli astar.'], ['Kontrol', 'Her ürün salona gelmeden önce tek tek kontrol edilir.']],
    mtm_k: 'Kişiye özel dikim', mtm_t: 'Ölçülerinize göre model', mtm_d: 'Bir modeli beğendiniz ama farklı beden, boy ya da deri rengi mi istiyorsunuz? Sizin için özel olarak dikelim.',
    mtm_steps: [['Modeli seçin', 'Katalogdan ya da kendi fotoğrafınızdan.'], ['Ölçüler', 'Salonda ya da tarifimizle evde.'], ['Dikim', 'Ferrizo’nun kendi atölyesinde.'], ['Prova', 'Ürünü tam oturana kadar ayarlarız.']],
    mtm_btn: 'Siparişi konuşalım',
    guide_k: 'Rehber', guide_t: 'Hangi deriyi seçmeli',
    guide_items: [['Koyun derisi', 'Hafif, yumuşak ve sıcak. Günlük ceket ve kabanlar için ideal.'], ['Dana derisi', 'Kalın ve sağlam, yıllarca formunu korur. Biker ceketlerin klasiği.'], ['Kuzu derisi', 'En ince ve en yumuşak dokulu deri. Şık modeller için.'], ['Muton ve kürk', 'Gerçek kış için en sıcak seçim.']],
    care_title: 'Deri nasıl korunur', care_tips: ['Geniş askıda, nefes alan kılıfta saklayın.', 'Islanan ürünü kaloriferden uzakta kurutun.', 'Sezonda bir kez deri kremi uygulayın.', 'Lekeler için yalnızca profesyonel temizleme.'],
    acc_details: 'Ürün detayları', acc_size: 'Beden tablosu', acc_delivery: 'Teslimat ve iade', acc_care: 'Bakım', acc_stores: 'Mağaza stoku',
    delivery_p: ['Nova Poshta ile tüm Ukrayna’ya teslimat.', 'Ternopil, İvano-Frankivsk ve Hmelnitski salonlarımızdan teslim alma.', 'Kullanılmamış ürünlerde 14 gün içinde değişim ve iade.'],
    care_p: ['Yalnızca profesyonel deri temizleme.', 'Geniş askıda, doğrudan güneşten uzak saklayın.', 'Islanan ürünü doğal yolla kurutun.'],
    stores_p: 'Bedeninizin stokta olup olmadığını salona sorun — ürünü sizin için ayırırız.',
    size_cols: ['Beden', 'UA', 'Göğüs, cm', 'Bel, cm', 'Kalça, cm'],
    size_how: 'Ölçü nasıl alınır', size_how_p: ['Göğüs — en geniş yerden, mezura yere paralel.', 'Bel — en ince yerden.', 'Kalça — en geniş yerden.'],
    size_note: 'Bedeninizden emin değil misiniz? Ölçülerinizi yazın, yardımcı olalım.',
    a_leather: 'Deri türü', a_lining: 'Astar', a_closure: 'Kapama', a_origin: 'Üretim', origin_val: 'Kendi atölyemiz, Ukrayna',
    lt_sheep: 'Koyun derisi', lt_cow: 'Dana derisi', lt_lamb: 'Kuzu derisi', lt_mouton: 'Muton',
    ln_viscose: 'Viskon', ln_textile: 'Tekstil', ln_fur: 'Doğal kürk', ln_none: 'Astarsız',
    cl_buttons: 'Düğme', cl_zip: 'Fermuar', cl_belt: 'Kemer', cl_magnet: 'Mıknatıs',
    model_info: 'Manken {h} cm boyunda ve {s} beden giyiyor', recent: 'Son baktıklarınız', ask_store: 'Stok sor'
  }
};
for (const k in EXTRA2) Object.assign(T[k], EXTRA2[k]);
