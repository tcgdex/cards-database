import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メリープ",
		'zh-tw': "咩利羊",
		'th-th': "เมรีป",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "綿毛が こすれ 電気が たまる。 かわいいからと 素手で 触ると バチッと 痺れて 痛いのだ。",
		'zh-tw': "會累積絨毛摩擦時所產生的電力。如果因為牠可愛而直接用手去摸， 就會被電得又麻又痛。",
		'th-th': "ขนจะเสียดสีกันจนเกิดไฟฟ้าสะสม พอยื่นมือไปแตะเพราะเห็นว่าน่ารักก็จะถูกช็อตจนรู้สึกเจ็บชา",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "うしろげり",
				'zh-tw': "後踢",
				'th-th': "เตะกลับหลัง",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "エレキボール",
				'zh-tw': "電球",
				'th-th': "อิเล็กทริกบอล",
			},
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687516,
				tcgplayer: 571574,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577453,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [179],
};

export default card;
