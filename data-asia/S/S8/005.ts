import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサ",
		'zh-tw': "斗笠菇",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "毒の 胞子を ばらまき 吸いこんで 苦しむ 相手に 強烈な パンチを くらわせる。",
		'zh-tw': "會撒出毒孢子，然後再讓因吸入孢子而痛苦不堪的對手吃上一記重拳。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
			},
			damage: 30,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "インパクトブロー",
				'zh-tw': "衝擊打擊",
			},
			damage: 150,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「インパクトブロー」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575555,
				tcgplayer: 569506,
			},
		},
	],

	evolveFrom: {
		ja: "キノココ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [286],
};

export default card;
