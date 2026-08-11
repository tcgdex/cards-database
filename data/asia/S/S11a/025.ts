import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
		'zh-tw': "吼吼鯨",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "飲みこんだ 海水を 目の 上の 鼻の 穴から 噴き出し アピール。 毎日 １トンの ヨワシを 食う。",
		'zh-tw': "把喝入的海水從眼睛上方的鼻孔中噴出來吸引他人。每天要吃１噸弱丁魚。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひとやすみ",
				'zh-tw': "小憩",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "水槍",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673022,
				tcgplayer: 570788,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570876,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [320],
};

export default card;
