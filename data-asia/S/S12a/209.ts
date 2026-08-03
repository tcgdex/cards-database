import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "メリープ",
		'zh-tw': "咩利羊",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "綿毛が こすれ 電気が たまる。 かわいいからと 素手で 触ると バチッと 痺れて 痛いのだ。",
		'zh-tw': "會累積絨毛摩擦時所產生的電力。如果因為牠可愛而直接用手去摸，就會被電得又麻又痛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "うしろげり",
				'zh-tw': "後踢",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "エレキボール",
				'zh-tw': "電球",
			},
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687771,
				tcgplayer: 571747,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Illustration rare",
	dexId: [179],
};

export default card;
