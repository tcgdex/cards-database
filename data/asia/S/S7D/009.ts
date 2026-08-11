import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "コオリッポ",
		'zh-tw': "冰砌鵝",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "暑さに 弱い 顔を いつも 氷で 冷やしている。 頭の 毛を 海に たらして 餌を釣る。",
		'zh-tw': "無論何時都用冰塊冰鎮著自己怕熱的臉。會把頭頂上的毛垂到海裡釣食物吃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スノーアイス",
				'zh-tw': "雪花冰",
			},
			damage: 20,
			cost: ["Water"],
		},
		{
			name: {
				ja: "ブロックフェイス",
				'zh-tw': "冰塊頭",
			},
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571591,
				tcgplayer: 569332,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [875],
};

export default card;
