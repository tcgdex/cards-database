import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー",
		'zh-tw': "橡實果",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "じっと 動かずに いると 木の実と そっくり。 ついばみに やって来た ポケモンを 驚かせて 遊ぶ。",
		'zh-tw': "在牠一動也不動的時候，看起來和樹果一模一樣， 以嚇唬來啄食自己的寶可夢為樂。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すいとる",
				'zh-tw': "吸取",
			},
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667608,
				tcgplayer: 569936,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [273],
};

export default card;
