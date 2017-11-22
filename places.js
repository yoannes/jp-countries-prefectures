// V1.1

var places = {
  locale: "ja",
  setLocale: function (locale) {
    this.locale = locale;

    // RECREATE <option> OF LISTS
    places.prefectures.createOptions();
    places.regions.createOptions();
    places.countries.createOptions();
  },
  prefectures: {
    options: null,
    createOptions: function () {
      var options = "";

      for (var i=0; i < this.list.length; i++) {
        var v = this.list[i];
        // console.log(v);

        var name;
        if (places.locale === "ja") {
          name = v.name + " ("+ v.kana +")";
        }else{
          name = v.en.charAt(0).toUpperCase() + v.en.slice(1);
        }
        options += "<option value='"+ v.id +"'>"+ name +"</option>";
      }

      this.options = options;
    },
    list: [
      {id:1,  region:1, name:"北海道",   short:"北海道", kana:"ホッカイドウ", en:"hokkaido",  neighbor:[2]},
      {id:2,  region:2, name:"青森県",   short:"青森",   kana:"アオモリ",     en:"aomori",    neighbor:[1, 3, 5]},
      {id:3,  region:2, name:"岩手県",   short:"岩手",   kana:"イワテ",       en:"iwate",     neighbor:[2, 4, 5]},
      {id:4,  region:2, name:"宮城県",   short:"宮城",   kana:"ミヤギ",       en:"miyagi",    neighbor:[3, 5, 6, 7]},
      {id:5,  region:2, name:"秋田県",   short:"秋田",   kana:"アキタ",       en:"akita",     neighbor:[2, 3, 4, 6]},
      {id:6,  region:2, name:"山形県",   short:"山形",   kana:"ヤマガタ",     en:"yamagata",  neighbor:[4, 5, 7, 15]},
      {id:7,  region:2, name:"福島県",   short:"福島",   kana:"フクシマ",     en:"fukushima", neighbor:[4, 6, 8, 9, 10, 15]},
      {id:8,  region:3, name:"茨城県",   short:"茨城",   kana:"イバラキ",     en:"ibaraki",   neighbor:[7, 9, 11, 12]},
      {id:9,  region:3, name:"栃木県",   short:"栃木",   kana:"トチギ",       en:"tochigi",   neighbor:[8, 7, 10, 11]},
      {id:10, region:3, name:"群馬県",   short:"群馬",   kana:"グンマ",       en:"gunma",     neighbor:[7, 9, 11, 15, 20]},
      {id:11, region:3, name:"埼玉県",   short:"埼玉",   kana:"サイタマ",     en:"saitama",   neighbor:[8, 9, 10, 12, 13, 19, 20]},
      {id:12, region:3, name:"千葉県",   short:"千葉",   kana:"チバ",         en:"chiba",     neighbor:[8, 11, 13, 14]},
      {id:13, region:3, name:"東京都",   short:"東京",   kana:"トウキョウ",   en:"tokyo",     neighbor:[11, 12, 14, 19]},
      {id:14, region:3, name:"神奈川県", short:"神奈川", kana:"カナガワ",     en:"kanagawa",  neighbor:[12, 13, 19, 22]},
      {id:15, region:4, name:"新潟県",   short:"新潟",   kana:"ニイガタ",     en:"niigata",   neighbor:[6, 7, 10, 16, 20]},
      {id:16, region:4, name:"富山県",   short:"富山",   kana:"トヤマ",       en:"toyama",    neighbor:[15, 17, 20, 21]},
      {id:17, region:4, name:"石川県",   short:"石川",   kana:"イシカワ",     en:"ishikawa",  neighbor:[16, 18, 21]},
      {id:18, region:4, name:"福井県",   short:"福井",   kana:"フクイ",       en:"fukui",     neighbor:[17, 21, 25, 26]},
      {id:19, region:4, name:"山梨県",   short:"山梨",   kana:"ヤマナシ",     en:"yamanashi", neighbor:[11, 13, 14, 20, 22]},
      {id:20, region:4, name:"長野県",   short:"長野",   kana:"ナガノ",       en:"nagano",    neighbor:[10, 11, 15, 16, 19, 21, 22, 23]},
      {id:21, region:4, name:"岐阜県",   short:"岐阜",   kana:"ギフ",         en:"gifu",      neighbor:[16, 17, 18, 20, 23, 24, 25]},
      {id:22, region:4, name:"静岡県",   short:"静岡",   kana:"シズオカ",     en:"shizuoka",  neighbor:[14, 19, 20, 23]},
      {id:23, region:4, name:"愛知県",   short:"愛知",   kana:"アイチ",       en:"aichi",     neighbor:[20, 21, 22, 24]},
      {id:24, region:5, name:"三重県",   short:"三重",   kana:"ミエ",         en:"mie",       neighbor:[21, 23, 25, 26, 29, 30]},
      {id:25, region:5, name:"滋賀県",   short:"滋賀",   kana:"シガ",         en:"shiga",     neighbor:[18, 21, 24, 26]},
      {id:26, region:5, name:"京都府",   short:"京都",   kana:"キョウト",     en:"kyoto",     neighbor:[18, 24, 25, 27, 28, 29]},
      {id:27, region:5, name:"大阪府",   short:"大阪",   kana:"オオサカ",     en:"osaka",     neighbor:[26, 28, 29, 30]},
      {id:28, region:5, name:"兵庫県",   short:"兵庫",   kana:"ヒョウゴ",     en:"hyogo",     neighbor:[26, 27, 30, 31, 33, 36, 37]},
      {id:29, region:5, name:"奈良県",   short:"奈良",   kana:"ナラ",         en:"nara",      neighbor:[24, 26, 27, 30]},
      {id:30, region:5, name:"和歌山県", short:"和歌山", kana:"ワカヤマ",     en:"wakayama",  neighbor:[24, 27, 28, 29, 36]},
      {id:31, region:6, name:"鳥取県",   short:"鳥取",   kana:"トットリ",     en:"tottori",   neighbor:[28, 32, 33, 34]},
      {id:32, region:6, name:"島根県",   short:"島根",   kana:"シマネ",       en:"shimane",   neighbor:[31, 34, 35]},
      {id:33, region:6, name:"岡山県",   short:"岡山",   kana:"オカヤマ",     en:"okayama",   neighbor:[28, 31, 34, 37]},
      {id:34, region:6, name:"広島県",   short:"広島",   kana:"ヒロシマ",     en:"hiroshima", neighbor:[31, 32, 33, 35, 37, 38]},
      {id:35, region:6, name:"山口県",   short:"山口",   kana:"ヤマグチ",     en:"yamaguchi", neighbor:[32, 34, 38, 40, 44]},
      {id:36, region:7, name:"徳島県",   short:"徳島",   kana:"トクシマ",     en:"tokushima", neighbor:[28, 30, 37, 38, 39]},
      {id:37, region:7, name:"香川県",   short:"香川",   kana:"カガワ",       en:"kagawa",    neighbor:[28, 33, 34, 36, 38]},
      {id:38, region:7, name:"愛媛県",   short:"愛媛",   kana:"エヒメ",       en:"ehime",     neighbor:[33, 34, 35, 36, 37, 39, 44]},
      {id:39, region:7, name:"高知県",   short:"高知",   kana:"コウチ",       en:"kochi",     neighbor:[36, 38]},
      {id:40, region:8, name:"福岡県",   short:"福岡",   kana:"フクオカ",     en:"fukuoka",   neighbor:[35, 41, 42, 43, 44]},
      {id:41, region:8, name:"佐賀県",   short:"佐賀",   kana:"サガ",         en:"saga",      neighbor:[40, 42]},
      {id:42, region:8, name:"長崎県",   short:"長崎",   kana:"ナガサキ",     en:"nagasaki",  neighbor:[41, 43]},
      {id:43, region:8, name:"熊本県",   short:"熊本",   kana:"クマモト",     en:"kumamoto",  neighbor:[40, 41, 42, 44, 45, 46]},
      {id:44, region:8, name:"大分県",   short:"大分",   kana:"オオイタ",     en:"oita",      neighbor:[35, 38, 40, 43, 45]},
      {id:45, region:8, name:"宮崎県",   short:"宮崎",   kana:"ミヤザキ",     en:"miyazaki",  neighbor:[43, 44, 46]},
      {id:46, region:8, name:"鹿児島県", short:"鹿児島", kana:"カゴシマ",     en:"kagoshima", neighbor:[43, 45, 47]},
      {id:47, region:8, name:"沖縄県",   short:"沖縄",   kana:"オキナワ",     en:"okinawa",   neighbor:[46]}
    ]
  },
  regions: {
    options: null,
    createOptions: function () {
      var options = "";

      for (var i=0; i < this.list.length; i++) {
        var v = this.list[i];
        // console.log(v);

        var name;
        if (places.locale === "ja") {
          name = v.name + " ("+ v.kana +")";
        }else{
          name = v.en.charAt(0).toUpperCase() + v.en.slice(1);
        }
        options += "<option value='"+ v.id +"'>"+ name +"</option>";
      }

      this.options = options;
    },
    list: [
      {id:1, name:"北海道", kana:"ホッカイドウ", en:"hokkaido", neighbor:[2]},
      {id:2, name:"東北",   kana:"トウホク",     en:"tohoku",   neighbor:[1]},
      {id:3, name:"関東",   kana:"カントウ",     en:"kanto",    neighbor:[2, 4]},
      {id:4, name:"中部",   kana:"チュウブ",     en:"chubu",    neighbor:[2, 3, 5]},
      {id:5, name:"近畿",   kana:"キンキ",       en:"kinki",    neighbor:[4, 6, 7]},
      {id:6, name:"中国",   kana:"チュウゴク",   en:"chugoku",  neighbor:[5, 7, 8]},
      {id:7, name:"四国",   kana:"シコク",       en:"shikoku",  neighbor:[5, 6, 8]},
      {id:8, name:"九州",   kana:"キュウシュウ", en:"kyusyu",   neighbor:[6, 7]}
    ]
  },
  countries: {
    options: null,
    createOptions: function () {
      var options = "";

      for (var k in this.list) {
        if (this.list.hasOwnProperty(k)) {
          var v = this.list[k];
          // console.log(v);

          var name = v.en;
          if (places.locale === "ja")
            name = v.ja;

          options += "<option value='"+ k +"'>"+ name +"</option>";
        }
      }

      this.options = options;
      // console.log(options);
    },
    list: {
      "IS": {
        "ja": "アイスランド",
        "en": "Iceland"
      },
      "IE": {
        "ja": "アイルランド",
        "en": "Ireland"
      },
      "AZ": {
        "ja": "アゼルバイジャン",
        "en": "Azerbaijan"
      },
      "AC": {
        "ja": "アセンション島",
        "en": "Ascension Island"
      },
      "AF": {
        "ja": "アフガニスタン",
        "en": "Afghanistan"
      },
      "US": {
        "ja": "アメリカ合衆国",
        "en": "United States"
      },
      "AE": {
        "ja": "アラブ首長国連邦",
        "en": "United Arab Emirates"
      },
      "DZ": {
        "ja": "アルジェリア",
        "en": "Algeria"
      },
      "AR": {
        "ja": "アルゼンチン",
        "en": "Argentina"
      },
      "AW": {
        "ja": "アルバ",
        "en": "Aruba"
      },
      "AL": {
        "ja": "アルバニア",
        "en": "Albania"
      },
      "AM": {
        "ja": "アルメニア",
        "en": "Armenia"
      },
      "AI": {
        "ja": "アンギラ",
        "en": "Anguilla"
      },
      "AO": {
        "ja": "アンゴラ",
        "en": "Angola"
      },
      "AG": {
        "ja": "アンティグア・バーブーダ",
        "en": "Antigua & Barbuda"
      },
      "AD": {
        "ja": "アンドラ",
        "en": "Andorra"
      },
      "YE": {
        "ja": "イエメン",
        "en": "Yemen"
      },
      "GB": {
        "ja": "イギリス",
        "en": "United Kingdom"
      },
      "IL": {
        "ja": "イスラエル",
        "en": "Israel"
      },
      "IT": {
        "ja": "イタリア",
        "en": "Italy"
      },
      "IQ": {
        "ja": "イラク",
        "en": "Iraq"
      },
      "IR": {
        "ja": "イラン",
        "en": "Iran"
      },
      "IN": {
        "ja": "インド",
        "en": "India"
      },
      "ID": {
        "ja": "インドネシア",
        "en": "Indonesia"
      },
      "WF": {
        "ja": "ウォリス・フツナ",
        "en": "Wallis & Futuna"
      },
      "UG": {
        "ja": "ウガンダ",
        "en": "Uganda"
      },
      "UA": {
        "ja": "ウクライナ",
        "en": "Ukraine"
      },
      "UZ": {
        "ja": "ウズベキスタン",
        "en": "Uzbekistan"
      },
      "UY": {
        "ja": "ウルグアイ",
        "en": "Uruguay"
      },
      "EC": {
        "ja": "エクアドル",
        "en": "Ecuador"
      },
      "EG": {
        "ja": "エジプト",
        "en": "Egypt"
      },
      "EE": {
        "ja": "エストニア",
        "en": "Estonia"
      },
      "ET": {
        "ja": "エチオピア",
        "en": "Ethiopia"
      },
      "ER": {
        "ja": "エリトリア",
        "en": "Eritrea"
      },
      "SV": {
        "ja": "エルサルバドル",
        "en": "El Salvador"
      },
      "AU": {
        "ja": "オーストラリア",
        "en": "Australia"
      },
      "AT": {
        "ja": "オーストリア",
        "en": "Austria"
      },
      "AX": {
        "ja": "オーランド諸島",
        "en": "Åland Islands"
      },
      "OM": {
        "ja": "オマーン",
        "en": "Oman"
      },
      "NL": {
        "ja": "オランダ",
        "en": "Netherlands"
      },
      "BQ": {
        "ja": "オランダ領カリブ",
        "en": "Caribbean Netherlands"
      },
      "GH": {
        "ja": "ガーナ",
        "en": "Ghana"
      },
      "CV": {
        "ja": "カーボベルデ",
        "en": "Cape Verde"
      },
      "GG": {
        "ja": "ガーンジー",
        "en": "Guernsey"
      },
      "GY": {
        "ja": "ガイアナ",
        "en": "Guyana"
      },
      "KZ": {
        "ja": "カザフスタン",
        "en": "Kazakhstan"
      },
      "QA": {
        "ja": "カタール",
        "en": "Qatar"
      },
      "CA": {
        "ja": "カナダ",
        "en": "Canada"
      },
      "IC": {
        "ja": "カナリア諸島",
        "en": "Canary Islands"
      },
      "GA": {
        "ja": "ガボン",
        "en": "Gabon"
      },
      "CM": {
        "ja": "カメルーン",
        "en": "Cameroon"
      },
      "GM": {
        "ja": "ガンビア",
        "en": "Gambia"
      },
      "KH": {
        "ja": "カンボジア",
        "en": "Cambodia"
      },
      "GN": {
        "ja": "ギニア",
        "en": "Guinea"
      },
      "GW": {
        "ja": "ギニアビサウ",
        "en": "Guinea-Bissau"
      },
      "CY": {
        "ja": "キプロス",
        "en": "Cyprus"
      },
      "CU": {
        "ja": "キューバ",
        "en": "Cuba"
      },
      "CW": {
        "ja": "キュラソー",
        "en": "Curaçao"
      },
      "GR": {
        "ja": "ギリシャ",
        "en": "Greece"
      },
      "KI": {
        "ja": "キリバス",
        "en": "Kiribati"
      },
      "KG": {
        "ja": "キルギス",
        "en": "Kyrgyzstan"
      },
      "GT": {
        "ja": "グアテマラ",
        "en": "Guatemala"
      },
      "GP": {
        "ja": "グアドループ",
        "en": "Guadeloupe"
      },
      "GU": {
        "ja": "グアム",
        "en": "Guam"
      },
      "KW": {
        "ja": "クウェート",
        "en": "Kuwait"
      },
      "CK": {
        "ja": "クック諸島",
        "en": "Cook Islands"
      },
      "GL": {
        "ja": "グリーンランド",
        "en": "Greenland"
      },
      "CX": {
        "ja": "クリスマス島",
        "en": "Christmas Island"
      },
      "GE": {
        "ja": "グルジア",
        "en": "Georgia"
      },
      "GD": {
        "ja": "グレナダ",
        "en": "Grenada"
      },
      "HR": {
        "ja": "クロアチア",
        "en": "Croatia"
      },
      "KY": {
        "ja": "ケイマン諸島",
        "en": "Cayman Islands"
      },
      "KE": {
        "ja": "ケニア",
        "en": "Kenya"
      },
      "CI": {
        "ja": "コートジボワール",
        "en": "Côte d’Ivoire"
      },
      "CC": {
        "ja": "ココス(キーリング)諸島",
        "en": "Cocos (Keeling) Islands"
      },
      "CR": {
        "ja": "コスタリカ",
        "en": "Costa Rica"
      },
      "XK": {
        "ja": "コソボ",
        "en": "Kosovo"
      },
      "KM": {
        "ja": "コモロ",
        "en": "Comoros"
      },
      "CO": {
        "ja": "コロンビア",
        "en": "Colombia"
      },
      "CG": {
        "ja": "コンゴ共和国(ブラザビル)",
        "en": "Congo - Brazzaville"
      },
      "CD": {
        "ja": "コンゴ民主共和国(キンシャサ)",
        "en": "Congo - Kinshasa"
      },
      "SA": {
        "ja": "サウジアラビア",
        "en": "Saudi Arabia"
      },
      "WS": {
        "ja": "サモア",
        "en": "Samoa"
      },
      "BL": {
        "ja": "サン・バルテルミー島",
        "en": "St. Barthélemy"
      },
      "MF": {
        "ja": "サン・マルタン",
        "en": "St. Martin"
      },
      "ST": {
        "ja": "サントメ・プリンシペ",
        "en": "São Tomé & Príncipe"
      },
      "ZM": {
        "ja": "ザンビア",
        "en": "Zambia"
      },
      "PM": {
        "ja": "サンピエール島・ミクロン島",
        "en": "St. Pierre & Miquelon"
      },
      "SM": {
        "ja": "サンマリノ",
        "en": "San Marino"
      },
      "SL": {
        "ja": "シエラレオネ",
        "en": "Sierra Leone"
      },
      "DJ": {
        "ja": "ジブチ",
        "en": "Djibouti"
      },
      "GI": {
        "ja": "ジブラルタル",
        "en": "Gibraltar"
      },
      "JE": {
        "ja": "ジャージー",
        "en": "Jersey"
      },
      "JM": {
        "ja": "ジャマイカ",
        "en": "Jamaica"
      },
      "SY": {
        "ja": "シリア",
        "en": "Syria"
      },
      "SG": {
        "ja": "シンガポール",
        "en": "Singapore"
      },
      "SX": {
        "ja": "シント・マールテン",
        "en": "Sint Maarten"
      },
      "ZW": {
        "ja": "ジンバブエ",
        "en": "Zimbabwe"
      },
      "CH": {
        "ja": "スイス",
        "en": "Switzerland"
      },
      "SE": {
        "ja": "スウェーデン",
        "en": "Sweden"
      },
      "SD": {
        "ja": "スーダン",
        "en": "Sudan"
      },
      "SJ": {
        "ja": "スバールバル諸島・ヤンマイエン島",
        "en": "Svalbard & Jan Mayen"
      },
      "ES": {
        "ja": "スペイン",
        "en": "Spain"
      },
      "SR": {
        "ja": "スリナム",
        "en": "Suriname"
      },
      "LK": {
        "ja": "スリランカ",
        "en": "Sri Lanka"
      },
      "SK": {
        "ja": "スロバキア",
        "en": "Slovakia"
      },
      "SI": {
        "ja": "スロベニア",
        "en": "Slovenia"
      },
      "SZ": {
        "ja": "スワジランド",
        "en": "Swaziland"
      },
      "EA": {
        "ja": "セウタ・メリリャ",
        "en": "Ceuta & Melilla"
      },
      "SC": {
        "ja": "セーシェル",
        "en": "Seychelles"
      },
      "SN": {
        "ja": "セネガル",
        "en": "Senegal"
      },
      "RS": {
        "ja": "セルビア",
        "en": "Serbia"
      },
      "KN": {
        "ja": "セントクリストファー・ネイビス",
        "en": "St. Kitts & Nevis"
      },
      "VC": {
        "ja": "セントビンセント・グレナディーン諸島",
        "en": "St. Vincent & Grenadines"
      },
      "SH": {
        "ja": "セントヘレナ",
        "en": "St. Helena"
      },
      "LC": {
        "ja": "セントルシア",
        "en": "St. Lucia"
      },
      "SO": {
        "ja": "ソマリア",
        "en": "Somalia"
      },
      "SB": {
        "ja": "ソロモン諸島",
        "en": "Solomon Islands"
      },
      "TC": {
        "ja": "タークス・カイコス諸島",
        "en": "Turks & Caicos Islands"
      },
      "TH": {
        "ja": "タイ",
        "en": "Thailand"
      },
      "TJ": {
        "ja": "タジキスタン",
        "en": "Tajikistan"
      },
      "TZ": {
        "ja": "タンザニア",
        "en": "Tanzania"
      },
      "CZ": {
        "ja": "チェコ共和国",
        "en": "Czech Republic"
      },
      "TD": {
        "ja": "チャド",
        "en": "Chad"
      },
      "TN": {
        "ja": "チュニジア",
        "en": "Tunisia"
      },
      "CL": {
        "ja": "チリ",
        "en": "Chile"
      },
      "TV": {
        "ja": "ツバル",
        "en": "Tuvalu"
      },
      "DG": {
        "ja": "ディエゴガルシア島",
        "en": "Diego Garcia"
      },
      "DK": {
        "ja": "デンマーク",
        "en": "Denmark"
      },
      "DE": {
        "ja": "ドイツ",
        "en": "Germany"
      },
      "TG": {
        "ja": "トーゴ",
        "en": "Togo"
      },
      "TK": {
        "ja": "トケラウ",
        "en": "Tokelau"
      },
      "DO": {
        "ja": "ドミニカ共和国",
        "en": "Dominican Republic"
      },
      "DM": {
        "ja": "ドミニカ国",
        "en": "Dominica"
      },
      "TA": {
        "ja": "トリスタン・ダ・クーニャ",
        "en": "Tristan da Cunha"
      },
      "TT": {
        "ja": "トリニダード・トバゴ",
        "en": "Trinidad & Tobago"
      },
      "TM": {
        "ja": "トルクメニスタン",
        "en": "Turkmenistan"
      },
      "TR": {
        "ja": "トルコ",
        "en": "Turkey"
      },
      "TO": {
        "ja": "トンガ",
        "en": "Tonga"
      },
      "NG": {
        "ja": "ナイジェリア",
        "en": "Nigeria"
      },
      "NR": {
        "ja": "ナウル",
        "en": "Nauru"
      },
      "NA": {
        "ja": "ナミビア",
        "en": "Namibia"
      },
      "NU": {
        "ja": "ニウエ島",
        "en": "Niue"
      },
      "NI": {
        "ja": "ニカラグア",
        "en": "Nicaragua"
      },
      "NE": {
        "ja": "ニジェール",
        "en": "Niger"
      },
      "NC": {
        "ja": "ニューカレドニア",
        "en": "New Caledonia"
      },
      "NZ": {
        "ja": "ニュージーランド",
        "en": "New Zealand"
      },
      "NP": {
        "ja": "ネパール",
        "en": "Nepal"
      },
      "NF": {
        "ja": "ノーフォーク島",
        "en": "Norfolk Island"
      },
      "NO": {
        "ja": "ノルウェー",
        "en": "Norway"
      },
      "BH": {
        "ja": "バーレーン",
        "en": "Bahrain"
      },
      "HT": {
        "ja": "ハイチ",
        "en": "Haiti"
      },
      "PK": {
        "ja": "パキスタン",
        "en": "Pakistan"
      },
      "VA": {
        "ja": "バチカン市国",
        "en": "Vatican City"
      },
      "PA": {
        "ja": "パナマ",
        "en": "Panama"
      },
      "VU": {
        "ja": "バヌアツ",
        "en": "Vanuatu"
      },
      "BS": {
        "ja": "バハマ",
        "en": "Bahamas"
      },
      "PG": {
        "ja": "パプアニューギニア",
        "en": "Papua New Guinea"
      },
      "BM": {
        "ja": "バミューダ",
        "en": "Bermuda"
      },
      "PW": {
        "ja": "パラオ",
        "en": "Palau"
      },
      "PY": {
        "ja": "パラグアイ",
        "en": "Paraguay"
      },
      "BB": {
        "ja": "バルバドス",
        "en": "Barbados"
      },
      "PS": {
        "ja": "パレスチナ",
        "en": "Palestinian Territories"
      },
      "HU": {
        "ja": "ハンガリー",
        "en": "Hungary"
      },
      "BD": {
        "ja": "バングラデシュ",
        "en": "Bangladesh"
      },
      "PN": {
        "ja": "ピトケアン諸島",
        "en": "Pitcairn Islands"
      },
      "FJ": {
        "ja": "フィジー",
        "en": "Fiji"
      },
      "PH": {
        "ja": "フィリピン",
        "en": "Philippines"
      },
      "FI": {
        "ja": "フィンランド",
        "en": "Finland"
      },
      "BT": {
        "ja": "ブータン",
        "en": "Bhutan"
      },
      "PR": {
        "ja": "プエルトリコ",
        "en": "Puerto Rico"
      },
      "FO": {
        "ja": "フェロー諸島",
        "en": "Faroe Islands"
      },
      "FK": {
        "ja": "フォークランド諸島",
        "en": "Falkland Islands"
      },
      "BR": {
        "ja": "ブラジル",
        "en": "Brazil"
      },
      "FR": {
        "ja": "フランス",
        "en": "France"
      },
      "BG": {
        "ja": "ブルガリア",
        "en": "Bulgaria"
      },
      "BF": {
        "ja": "ブルキナファソ",
        "en": "Burkina Faso"
      },
      "BN": {
        "ja": "ブルネイ",
        "en": "Brunei"
      },
      "BI": {
        "ja": "ブルンジ",
        "en": "Burundi"
      },
      "VN": {
        "ja": "ベトナム",
        "en": "Vietnam"
      },
      "BJ": {
        "ja": "ベナン",
        "en": "Benin"
      },
      "VE": {
        "ja": "ベネズエラ",
        "en": "Venezuela"
      },
      "BY": {
        "ja": "ベラルーシ",
        "en": "Belarus"
      },
      "BZ": {
        "ja": "ベリーズ",
        "en": "Belize"
      },
      "PE": {
        "ja": "ペルー",
        "en": "Peru"
      },
      "BE": {
        "ja": "ベルギー",
        "en": "Belgium"
      },
      "PL": {
        "ja": "ポーランド",
        "en": "Poland"
      },
      "BA": {
        "ja": "ボスニア・ヘルツェゴビナ",
        "en": "Bosnia & Herzegovina"
      },
      "BW": {
        "ja": "ボツワナ",
        "en": "Botswana"
      },
      "BO": {
        "ja": "ボリビア",
        "en": "Bolivia"
      },
      "PT": {
        "ja": "ポルトガル",
        "en": "Portugal"
      },
      "HN": {
        "ja": "ホンジュラス",
        "en": "Honduras"
      },
      "MH": {
        "ja": "マーシャル諸島",
        "en": "Marshall Islands"
      },
      "MK": {
        "ja": "マケドニア",
        "en": "Macedonia"
      },
      "MG": {
        "ja": "マダガスカル",
        "en": "Madagascar"
      },
      "YT": {
        "ja": "マヨット島",
        "en": "Mayotte"
      },
      "MW": {
        "ja": "マラウイ",
        "en": "Malawi"
      },
      "ML": {
        "ja": "マリ",
        "en": "Mali"
      },
      "MT": {
        "ja": "マルタ",
        "en": "Malta"
      },
      "MQ": {
        "ja": "マルティニーク",
        "en": "Martinique"
      },
      "MY": {
        "ja": "マレーシア",
        "en": "Malaysia"
      },
      "IM": {
        "ja": "マン島",
        "en": "Isle of Man"
      },
      "FM": {
        "ja": "ミクロネシア連邦",
        "en": "Micronesia"
      },
      "MM": {
        "ja": "ミャンマー",
        "en": "Myanmar (Burma)"
      },
      "MX": {
        "ja": "メキシコ",
        "en": "Mexico"
      },
      "MU": {
        "ja": "モーリシャス",
        "en": "Mauritius"
      },
      "MR": {
        "ja": "モーリタニア",
        "en": "Mauritania"
      },
      "MZ": {
        "ja": "モザンビーク",
        "en": "Mozambique"
      },
      "MC": {
        "ja": "モナコ",
        "en": "Monaco"
      },
      "MV": {
        "ja": "モルディブ",
        "en": "Maldives"
      },
      "MD": {
        "ja": "モルドバ",
        "en": "Moldova"
      },
      "MA": {
        "ja": "モロッコ",
        "en": "Morocco"
      },
      "MN": {
        "ja": "モンゴル",
        "en": "Mongolia"
      },
      "ME": {
        "ja": "モンテネグロ",
        "en": "Montenegro"
      },
      "MS": {
        "ja": "モントセラト",
        "en": "Montserrat"
      },
      "JO": {
        "ja": "ヨルダン",
        "en": "Jordan"
      },
      "LA": {
        "ja": "ラオス",
        "en": "Laos"
      },
      "LV": {
        "ja": "ラトビア",
        "en": "Latvia"
      },
      "LT": {
        "ja": "リトアニア",
        "en": "Lithuania"
      },
      "LY": {
        "ja": "リビア",
        "en": "Libya"
      },
      "LI": {
        "ja": "リヒテンシュタイン",
        "en": "Liechtenstein"
      },
      "LR": {
        "ja": "リベリア",
        "en": "Liberia"
      },
      "RO": {
        "ja": "ルーマニア",
        "en": "Romania"
      },
      "LU": {
        "ja": "ルクセンブルグ",
        "en": "Luxembourg"
      },
      "RW": {
        "ja": "ルワンダ",
        "en": "Rwanda"
      },
      "LS": {
        "ja": "レソト",
        "en": "Lesotho"
      },
      "LB": {
        "ja": "レバノン",
        "en": "Lebanon"
      },
      "RE": {
        "ja": "レユニオン島",
        "en": "Réunion"
      },
      "RU": {
        "ja": "ロシア",
        "en": "Russia"
      },
      "IO": {
        "ja": "英領インド洋地域",
        "en": "British Indian Ocean Territory"
      },
      "VG": {
        "ja": "英領ヴァージン諸島",
        "en": "British Virgin Islands"
      },
      "EH": {
        "ja": "西サハラ",
        "en": "Western Sahara"
      },
      "GQ": {
        "ja": "赤道ギニア",
        "en": "Equatorial Guinea"
      },
      "TW": {
        "ja": "台湾",
        "en": "Taiwan"
      },
      "KR": {
        "ja": "大韓民国",
        "en": "South Korea"
      },
      "CF": {
        "ja": "中央アフリカ共和国",
        "en": "Central African Republic"
      },
      "MO": {
        "ja": "中華人民共和国マカオ特別行政区",
        "en": "Macau SAR China"
      },
      "HK": {
        "ja": "中華人民共和国香港特別行政区",
        "en": "Hong Kong SAR China"
      },
      "CN": {
        "ja": "中国",
        "en": "China"
      },
      "KP": {
        "ja": "朝鮮民主主義人民共和国",
        "en": "North Korea"
      },
      "TL": {
        "ja": "東ティモール",
        "en": "Timor-Leste"
      },
      "ZA": {
        "ja": "南アフリカ",
        "en": "South Africa"
      },
      "GS": {
        "ja": "南ジョージア島・南サンドイッチ諸島",
        "en": "South Georgia & South Sandwich Islands"
      },
      "SS": {
        "ja": "南スーダン",
        "en": "South Sudan"
      },
      "AQ": {
        "ja": "南極",
        "en": "Antarctica"
      },
      "JP": {
        "ja": "日本",
        "en": "Japan"
      },
      "GF": {
        "ja": "仏領ギアナ",
        "en": "French Guiana"
      },
      "PF": {
        "ja": "仏領ポリネシア",
        "en": "French Polynesia"
      },
      "TF": {
        "ja": "仏領極南諸島",
        "en": "French Southern Territories"
      },
      "VI": {
        "ja": "米領ヴァージン諸島",
        "en": "U.S. Virgin Islands"
      },
      "AS": {
        "ja": "米領サモア",
        "en": "American Samoa"
      },
      "UM": {
        "ja": "米領太平洋諸島",
        "en": "U.S. Outlying Islands"
      },
      "MP": {
        "ja": "北マリアナ諸島",
        "en": "Northern Mariana Islands"
      }
    }
  }
};
