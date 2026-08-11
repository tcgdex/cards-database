import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レパルダスV",
		'zh-tw': "酷豹V",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かくしヅメ" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札からベンチに出したとき、1回使える。おたがいの場のポケモンについている「ポケモンのどうぐ」を1枚選び、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "シャドーリッパー",
				'zh-tw': "暗影拆裂",
			},
			damage: 110,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンと、ついているすべてのカードを、手札にもどす。",
				'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回手牌。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560463,
				tcgplayer: 569179,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [510],
};

export default card;
