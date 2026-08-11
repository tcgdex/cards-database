import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "メリープ",
		'zh-tw': "咩利羊",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "綿毛が こすれ 電気が たまる。 かわいいからと 素手で 触ると バチッと 痺れて 痛いのだ。",
		'zh-tw': "會累積絨毛摩擦時所產生的電力。如果因為牠可愛而直接用手去摸，就會被電得又麻又痛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なきごえ",
				'zh-tw': "叫聲",
			},
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			},
		},
		{
			name: {
				ja: "バチバチ",
				'zh-tw': "劈哩啪啦",
			},
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586567,
				tcgplayer: 571304,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578380,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [179],
};

export default card;
