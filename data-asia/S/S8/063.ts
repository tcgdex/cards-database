import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス",
		'zh-tw': "灰塵山",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "右腕から 出す 毒液は 弱った 生物が 浴びれば 即死するほど 危険な シロモノ。",
		'zh-tw': "從右臂噴出的毒液十分危險，虛弱的生物只要一沾到，立刻就會丟掉性命。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "どくガス",
				'zh-tw': "毒瓦斯",
			},
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
		{
			name: {
				ja: "ヘドロのうず",
				'zh-tw': "污泥旋渦",
			},
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575618,
				tcgplayer: 569564,
			},
		},
	],

	evolveFrom: {
		ja: "ヤブクロン",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [569],
};

export default card;
