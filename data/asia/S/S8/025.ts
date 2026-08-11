import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "サクラビス",
		'zh-tw': "櫻花魚",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "獲物の 体液を 吸う。 肉は 海底に 沈み 他の ポケモンの エサに なるのだ。",
		'zh-tw': "會吸取獵物的體液。剩下的肉會沉入海底，成為其他寶可夢的食物。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "れんげきキャンセラー",
				'zh-tw': "連擊消弭",
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手の場の「れんげき」のポケモンの特性は、すべてなくなる。",
				'zh-tw': "只要這隻寶可夢在場上，對手的場上「連擊」寶可夢的特性全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ドレインキッス",
				'zh-tw': "吸取之吻",
			},
			damage: 50,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575580,
				tcgplayer: 569526,
			},
		},
	],

	evolveFrom: {
		ja: "パールル",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [368],
};

export default card;
