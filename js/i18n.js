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
