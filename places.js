/**
 * @version   1.1.1
 * @author    Yoannes
 * @licence   MIT
 */

var Places = function (locale) {
  if (!locale) locale = 'ja';

  var prefectureOptions = '';
  var prefectureList = [
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
  ];

  var regionsOptions = '';
  var regionsList = [
    {id:1, name:"北海道", kana:"ホッカイドウ", en:"hokkaido", neighbor:[2]},
    {id:2, name:"東北",   kana:"トウホク",     en:"tohoku",   neighbor:[1]},
    {id:3, name:"関東",   kana:"カントウ",     en:"kanto",    neighbor:[2, 4]},
    {id:4, name:"中部",   kana:"チュウブ",     en:"chubu",    neighbor:[2, 3, 5]},
    {id:5, name:"近畿",   kana:"キンキ",       en:"kinki",    neighbor:[4, 6, 7]},
    {id:6, name:"中国",   kana:"チュウゴク",   en:"chugoku",  neighbor:[5, 7, 8]},
    {id:7, name:"四国",   kana:"シコク",       en:"shikoku",  neighbor:[5, 6, 8]},
    {id:8, name:"九州",   kana:"キュウシュウ", en:"kyusyu",   neighbor:[6, 7]}
  ];

  var countryOptions = '';
  var countryList = [
    {"ja":"アイスランド","en":"Iceland","code":"IS"},{"ja":"アイルランド","en":"Ireland","code":"IE"},{"ja":"アゼルバイジャン","en":"Azerbaijan","code":"AZ"},{"ja":"アセンション島","en":"Ascension Island","code":"AC"},{"ja":"アフガニスタン","en":"Afghanistan","code":"AF"},{"ja":"アメリカ合衆国","en":"United States","code":"US"},{"ja":"アラブ首長国連邦","en":"United Arab Emirates","code":"AE"},{"ja":"アルジェリア","en":"Algeria","code":"DZ"},{"ja":"アルゼンチン","en":"Argentina","code":"AR"},{"ja":"アルバ","en":"Aruba","code":"AW"},{"ja":"アルバニア","en":"Albania","code":"AL"},{"ja":"アルメニア","en":"Armenia","code":"AM"},{"ja":"アンギラ","en":"Anguilla","code":"AI"},{"ja":"アンゴラ","en":"Angola","code":"AO"},{"ja":"アンティグア・バーブーダ","en":"Antigua & Barbuda","code":"AG"},{"ja":"アンドラ","en":"Andorra","code":"AD"},{"ja":"イエメン","en":"Yemen","code":"YE"},{"ja":"イギリス","en":"United Kingdom","code":"GB"},{"ja":"イスラエル","en":"Israel","code":"IL"},{"ja":"イタリア","en":"Italy","code":"IT"},{"ja":"イラク","en":"Iraq","code":"IQ"},{"ja":"イラン","en":"Iran","code":"IR"},{"ja":"インド","en":"India","code":"IN"},{"ja":"インドネシア","en":"Indonesia","code":"ID"},{"ja":"ウォリス・フツナ","en":"Wallis & Futuna","code":"WF"},{"ja":"ウガンダ","en":"Uganda","code":"UG"},{"ja":"ウクライナ","en":"Ukraine","code":"UA"},{"ja":"ウズベキスタン","en":"Uzbekistan","code":"UZ"},{"ja":"ウルグアイ","en":"Uruguay","code":"UY"},{"ja":"エクアドル","en":"Ecuador","code":"EC"},{"ja":"エジプト","en":"Egypt","code":"EG"},{"ja":"エストニア","en":"Estonia","code":"EE"},{"ja":"エチオピア","en":"Ethiopia","code":"ET"},{"ja":"エリトリア","en":"Eritrea","code":"ER"},{"ja":"エルサルバドル","en":"El Salvador","code":"SV"},{"ja":"オーストラリア","en":"Australia","code":"AU"},{"ja":"オーストリア","en":"Austria","code":"AT"},{"ja":"オーランド諸島","en":"Åland Islands","code":"AX"},{"ja":"オマーン","en":"Oman","code":"OM"},{"ja":"オランダ","en":"Netherlands","code":"NL"},{"ja":"オランダ領カリブ","en":"Caribbean Netherlands","code":"BQ"},{"ja":"ガーナ","en":"Ghana","code":"GH"},{"ja":"カーボベルデ","en":"Cape Verde","code":"CV"},{"ja":"ガーンジー","en":"Guernsey","code":"GG"},{"ja":"ガイアナ","en":"Guyana","code":"GY"},{"ja":"カザフスタン","en":"Kazakhstan","code":"KZ"},{"ja":"カタール","en":"Qatar","code":"QA"},{"ja":"カナダ","en":"Canada","code":"CA"},{"ja":"カナリア諸島","en":"Canary Islands","code":"IC"},{"ja":"ガボン","en":"Gabon","code":"GA"},{"ja":"カメルーン","en":"Cameroon","code":"CM"},{"ja":"ガンビア","en":"Gambia","code":"GM"},{"ja":"カンボジア","en":"Cambodia","code":"KH"},{"ja":"ギニア","en":"Guinea","code":"GN"},{"ja":"ギニアビサウ","en":"Guinea-Bissau","code":"GW"},{"ja":"キプロス","en":"Cyprus","code":"CY"},{"ja":"キューバ","en":"Cuba","code":"CU"},{"ja":"キュラソー","en":"Curaçao","code":"CW"},{"ja":"ギリシャ","en":"Greece","code":"GR"},{"ja":"キリバス","en":"Kiribati","code":"KI"},{"ja":"キルギス","en":"Kyrgyzstan","code":"KG"},{"ja":"グアテマラ","en":"Guatemala","code":"GT"},{"ja":"グアドループ","en":"Guadeloupe","code":"GP"},{"ja":"グアム","en":"Guam","code":"GU"},{"ja":"クウェート","en":"Kuwait","code":"KW"},{"ja":"クック諸島","en":"Cook Islands","code":"CK"},{"ja":"グリーンランド","en":"Greenland","code":"GL"},{"ja":"クリスマス島","en":"Christmas Island","code":"CX"},{"ja":"グルジア","en":"Georgia","code":"GE"},{"ja":"グレナダ","en":"Grenada","code":"GD"},{"ja":"クロアチア","en":"Croatia","code":"HR"},{"ja":"ケイマン諸島","en":"Cayman Islands","code":"KY"},{"ja":"ケニア","en":"Kenya","code":"KE"},{"ja":"コートジボワール","en":"Côte d’Ivoire","code":"CI"},{"ja":"ココス(キーリング)諸島","en":"Cocos (Keeling) Islands","code":"CC"},{"ja":"コスタリカ","en":"Costa Rica","code":"CR"},{"ja":"コソボ","en":"Kosovo","code":"XK"},{"ja":"コモロ","en":"Comoros","code":"KM"},{"ja":"コロンビア","en":"Colombia","code":"CO"},{"ja":"コンゴ共和国(ブラザビル)","en":"Congo - Brazzaville","code":"CG"},{"ja":"コンゴ民主共和国(キンシャサ)","en":"Congo - Kinshasa","code":"CD"},{"ja":"サウジアラビア","en":"Saudi Arabia","code":"SA"},{"ja":"サモア","en":"Samoa","code":"WS"},{"ja":"サン・バルテルミー島","en":"St. Barthélemy","code":"BL"},{"ja":"サン・マルタン","en":"St. Martin","code":"MF"},{"ja":"サントメ・プリンシペ","en":"São Tomé & Príncipe","code":"ST"},{"ja":"ザンビア","en":"Zambia","code":"ZM"},{"ja":"サンピエール島・ミクロン島","en":"St. Pierre & Miquelon","code":"PM"},{"ja":"サンマリノ","en":"San Marino","code":"SM"},{"ja":"シエラレオネ","en":"Sierra Leone","code":"SL"},{"ja":"ジブチ","en":"Djibouti","code":"DJ"},{"ja":"ジブラルタル","en":"Gibraltar","code":"GI"},{"ja":"ジャージー","en":"Jersey","code":"JE"},{"ja":"ジャマイカ","en":"Jamaica","code":"JM"},{"ja":"シリア","en":"Syria","code":"SY"},{"ja":"シンガポール","en":"Singapore","code":"SG"},{"ja":"シント・マールテン","en":"Sint Maarten","code":"SX"},{"ja":"ジンバブエ","en":"Zimbabwe","code":"ZW"},{"ja":"スイス","en":"Switzerland","code":"CH"},{"ja":"スウェーデン","en":"Sweden","code":"SE"},{"ja":"スーダン","en":"Sudan","code":"SD"},{"ja":"スバールバル諸島・ヤンマイエン島","en":"Svalbard & Jan Mayen","code":"SJ"},{"ja":"スペイン","en":"Spain","code":"ES"},{"ja":"スリナム","en":"Suriname","code":"SR"},{"ja":"スリランカ","en":"Sri Lanka","code":"LK"},{"ja":"スロバキア","en":"Slovakia","code":"SK"},{"ja":"スロベニア","en":"Slovenia","code":"SI"},{"ja":"スワジランド","en":"Swaziland","code":"SZ"},{"ja":"セウタ・メリリャ","en":"Ceuta & Melilla","code":"EA"},{"ja":"セーシェル","en":"Seychelles","code":"SC"},{"ja":"セネガル","en":"Senegal","code":"SN"},{"ja":"セルビア","en":"Serbia","code":"RS"},{"ja":"セントクリストファー・ネイビス","en":"St. Kitts & Nevis","code":"KN"},{"ja":"セントビンセント・グレナディーン諸島","en":"St. Vincent & Grenadines","code":"VC"},{"ja":"セントヘレナ","en":"St. Helena","code":"SH"},{"ja":"セントルシア","en":"St. Lucia","code":"LC"},{"ja":"ソマリア","en":"Somalia","code":"SO"},{"ja":"ソロモン諸島","en":"Solomon Islands","code":"SB"},{"ja":"タークス・カイコス諸島","en":"Turks & Caicos Islands","code":"TC"},{"ja":"タイ","en":"Thailand","code":"TH"},{"ja":"タジキスタン","en":"Tajikistan","code":"TJ"},{"ja":"タンザニア","en":"Tanzania","code":"TZ"},{"ja":"チェコ共和国","en":"Czech Republic","code":"CZ"},{"ja":"チャド","en":"Chad","code":"TD"},{"ja":"チュニジア","en":"Tunisia","code":"TN"},{"ja":"チリ","en":"Chile","code":"CL"},{"ja":"ツバル","en":"Tuvalu","code":"TV"},{"ja":"ディエゴガルシア島","en":"Diego Garcia","code":"DG"},{"ja":"デンマーク","en":"Denmark","code":"DK"},{"ja":"ドイツ","en":"Germany","code":"DE"},{"ja":"トーゴ","en":"Togo","code":"TG"},{"ja":"トケラウ","en":"Tokelau","code":"TK"},{"ja":"ドミニカ共和国","en":"Dominican Republic","code":"DO"},{"ja":"ドミニカ国","en":"Dominica","code":"DM"},{"ja":"トリスタン・ダ・クーニャ","en":"Tristan da Cunha","code":"TA"},{"ja":"トリニダード・トバゴ","en":"Trinidad & Tobago","code":"TT"},{"ja":"トルクメニスタン","en":"Turkmenistan","code":"TM"},{"ja":"トルコ","en":"Turkey","code":"TR"},{"ja":"トンガ","en":"Tonga","code":"TO"},{"ja":"ナイジェリア","en":"Nigeria","code":"NG"},{"ja":"ナウル","en":"Nauru","code":"NR"},{"ja":"ナミビア","en":"Namibia","code":"NA"},{"ja":"ニウエ島","en":"Niue","code":"NU"},{"ja":"ニカラグア","en":"Nicaragua","code":"NI"},{"ja":"ニジェール","en":"Niger","code":"NE"},{"ja":"ニューカレドニア","en":"New Caledonia","code":"NC"},{"ja":"ニュージーランド","en":"New Zealand","code":"NZ"},{"ja":"ネパール","en":"Nepal","code":"NP"},{"ja":"ノーフォーク島","en":"Norfolk Island","code":"NF"},{"ja":"ノルウェー","en":"Norway","code":"NO"},{"ja":"バーレーン","en":"Bahrain","code":"BH"},{"ja":"ハイチ","en":"Haiti","code":"HT"},{"ja":"パキスタン","en":"Pakistan","code":"PK"},{"ja":"バチカン市国","en":"Vatican City","code":"VA"},{"ja":"パナマ","en":"Panama","code":"PA"},{"ja":"バヌアツ","en":"Vanuatu","code":"VU"},{"ja":"バハマ","en":"Bahamas","code":"BS"},{"ja":"パプアニューギニア","en":"Papua New Guinea","code":"PG"},{"ja":"バミューダ","en":"Bermuda","code":"BM"},{"ja":"パラオ","en":"Palau","code":"PW"},{"ja":"パラグアイ","en":"Paraguay","code":"PY"},{"ja":"バルバドス","en":"Barbados","code":"BB"},{"ja":"パレスチナ","en":"Palestinian Territories","code":"PS"},{"ja":"ハンガリー","en":"Hungary","code":"HU"},{"ja":"バングラデシュ","en":"Bangladesh","code":"BD"},{"ja":"ピトケアン諸島","en":"Pitcairn Islands","code":"PN"},{"ja":"フィジー","en":"Fiji","code":"FJ"},{"ja":"フィリピン","en":"Philippines","code":"PH"},{"ja":"フィンランド","en":"Finland","code":"FI"},{"ja":"ブータン","en":"Bhutan","code":"BT"},{"ja":"プエルトリコ","en":"Puerto Rico","code":"PR"},{"ja":"フェロー諸島","en":"Faroe Islands","code":"FO"},{"ja":"フォークランド諸島","en":"Falkland Islands","code":"FK"},{"ja":"ブラジル","en":"Brazil","code":"BR"},{"ja":"フランス","en":"France","code":"FR"},{"ja":"ブルガリア","en":"Bulgaria","code":"BG"},{"ja":"ブルキナファソ","en":"Burkina Faso","code":"BF"},{"ja":"ブルネイ","en":"Brunei","code":"BN"},{"ja":"ブルンジ","en":"Burundi","code":"BI"},{"ja":"ベトナム","en":"Vietnam","code":"VN"},{"ja":"ベナン","en":"Benin","code":"BJ"},{"ja":"ベネズエラ","en":"Venezuela","code":"VE"},{"ja":"ベラルーシ","en":"Belarus","code":"BY"},{"ja":"ベリーズ","en":"Belize","code":"BZ"},{"ja":"ペルー","en":"Peru","code":"PE"},{"ja":"ベルギー","en":"Belgium","code":"BE"},{"ja":"ポーランド","en":"Poland","code":"PL"},{"ja":"ボスニア・ヘルツェゴビナ","en":"Bosnia & Herzegovina","code":"BA"},{"ja":"ボツワナ","en":"Botswana","code":"BW"},{"ja":"ボリビア","en":"Bolivia","code":"BO"},{"ja":"ポルトガル","en":"Portugal","code":"PT"},{"ja":"ホンジュラス","en":"Honduras","code":"HN"},{"ja":"マーシャル諸島","en":"Marshall Islands","code":"MH"},{"ja":"マケドニア","en":"Macedonia","code":"MK"},{"ja":"マダガスカル","en":"Madagascar","code":"MG"},{"ja":"マヨット島","en":"Mayotte","code":"YT"},{"ja":"マラウイ","en":"Malawi","code":"MW"},{"ja":"マリ","en":"Mali","code":"ML"},{"ja":"マルタ","en":"Malta","code":"MT"},{"ja":"マルティニーク","en":"Martinique","code":"MQ"},{"ja":"マレーシア","en":"Malaysia","code":"MY"},{"ja":"マン島","en":"Isle of Man","code":"IM"},{"ja":"ミクロネシア連邦","en":"Micronesia","code":"FM"},{"ja":"ミャンマー","en":"Myanmar (Burma)","code":"MM"},{"ja":"メキシコ","en":"Mexico","code":"MX"},{"ja":"モーリシャス","en":"Mauritius","code":"MU"},{"ja":"モーリタニア","en":"Mauritania","code":"MR"},{"ja":"モザンビーク","en":"Mozambique","code":"MZ"},{"ja":"モナコ","en":"Monaco","code":"MC"},{"ja":"モルディブ","en":"Maldives","code":"MV"},{"ja":"モルドバ","en":"Moldova","code":"MD"},{"ja":"モロッコ","en":"Morocco","code":"MA"},{"ja":"モンゴル","en":"Mongolia","code":"MN"},{"ja":"モンテネグロ","en":"Montenegro","code":"ME"},{"ja":"モントセラト","en":"Montserrat","code":"MS"},{"ja":"ヨルダン","en":"Jordan","code":"JO"},{"ja":"ラオス","en":"Laos","code":"LA"},{"ja":"ラトビア","en":"Latvia","code":"LV"},{"ja":"リトアニア","en":"Lithuania","code":"LT"},{"ja":"リビア","en":"Libya","code":"LY"},{"ja":"リヒテンシュタイン","en":"Liechtenstein","code":"LI"},{"ja":"リベリア","en":"Liberia","code":"LR"},{"ja":"ルーマニア","en":"Romania","code":"RO"},{"ja":"ルクセンブルグ","en":"Luxembourg","code":"LU"},{"ja":"ルワンダ","en":"Rwanda","code":"RW"},{"ja":"レソト","en":"Lesotho","code":"LS"},{"ja":"レバノン","en":"Lebanon","code":"LB"},{"ja":"レユニオン島","en":"Réunion","code":"RE"},{"ja":"ロシア","en":"Russia","code":"RU"},{"ja":"英領インド洋地域","en":"British Indian Ocean Territory","code":"IO"},{"ja":"英領ヴァージン諸島","en":"British Virgin Islands","code":"VG"},{"ja":"西サハラ","en":"Western Sahara","code":"EH"},{"ja":"赤道ギニア","en":"Equatorial Guinea","code":"GQ"},{"ja":"台湾","en":"Taiwan","code":"TW"},{"ja":"大韓民国","en":"South Korea","code":"KR"},{"ja":"中央アフリカ共和国","en":"Central African Republic","code":"CF"},{"ja":"中華人民共和国マカオ特別行政区","en":"Macau SAR China","code":"MO"},{"ja":"中華人民共和国香港特別行政区","en":"Hong Kong SAR China","code":"HK"},{"ja":"中国","en":"China","code":"CN"},{"ja":"朝鮮民主主義人民共和国","en":"North Korea","code":"KP"},{"ja":"東ティモール","en":"Timor-Leste","code":"TL"},{"ja":"南アフリカ","en":"South Africa","code":"ZA"},{"ja":"南ジョージア島・南サンドイッチ諸島","en":"South Georgia & South Sandwich Islands","code":"GS"},{"ja":"南スーダン","en":"South Sudan","code":"SS"},{"ja":"南極","en":"Antarctica","code":"AQ"},{"ja":"日本","en":"Japan","code":"JP"},{"ja":"仏領ギアナ","en":"French Guiana","code":"GF"},{"ja":"仏領ポリネシア","en":"French Polynesia","code":"PF"},{"ja":"仏領極南諸島","en":"French Southern Territories","code":"TF"},{"ja":"米領ヴァージン諸島","en":"U.S. Virgin Islands","code":"VI"},{"ja":"米領サモア","en":"American Samoa","code":"AS"},{"ja":"米領太平洋諸島","en":"U.S. Outlying Islands","code":"UM"},{"ja":"北マリアナ諸島","en":"Northern Mariana Islands","code":"MP"}
  ];

  this.setLocale = function (newLocale) {
    locale = newLocale;

    this.prefectures.createOptions();
    this.regions.createOptions();
    this.country.createOptions();
  };

  this.prefectures = {
    createOptions: function () {
      prefectureOptions = '';

      for (var i=0; i < prefectureList.length; i++) {
        var v = prefectureList[i];
        var name;

        if (locale === 'ja')
          name = v.name + ' (' + v.kana + ')';
        else
          name = v.en.charAt(0).toUpperCase() + v.en.slice(1);

        prefectureOptions += '<option value="'+ v.id +'">'+ name +'</option>';
      }
    },
    getOptions: function () {
      return prefectureOptions;
    },
    getListArray: function () {
      return prefectureList;
    }
  };

  this.regions = {
    createOptions: function () {
      regionsOptions = '';
      for (var i=0; i < regionsList.length; i++) {
        var v = regionsList[i];
        var name;

        if (locale === 'ja')
          name = v.name + ' (' + v.kana + ')';
        else
          name = v.en.charAt(0).toUpperCase() + v.en.slice(1);

        regionsOptions += '<option value="'+ v.id +'">'+ name +'</option>';
      }
    },
    getOptions: function () {
      return regionsOptions;
    },
    getListArray: function () {
      return regionsList;
    }
  };

  this.country = {
    createOptions: function () {
      countryOptions = '';
      for (var i=0; i < countryList.length; i++) {
        var v = countryList[i];

        countryOptions += '<option value="'+ v.code +'">'+ (locale === 'ja' ? v.ja : v.en) +'</option>';
      }
    },
    getOptions: function () {
      return countryOptions;
    },
    getListArray: function () {
      return countryList;
    }
  };

  this.prefectures.createOptions();
  this.regions.createOptions();
  this.country.createOptions();
};