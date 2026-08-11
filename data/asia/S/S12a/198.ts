import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ノコッチ",
		'zh-tw': "土龍弟弟",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "人の 姿を 見ると シッポで 穴を 掘って 逃げてしまう。 もし 出会えたなら ラッキーだよ。",
		'zh-tw': "一看到人就會用尾巴挖洞逃走。如果能夠遇見牠，代表你很幸運。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふしぎなすあな",
				'zh-tw': "神秘巢穴",
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場の【無】ポケモン全員の弱点は、すべてなくなる。",
				'zh-tw': "只要這隻寶可夢在場上，雙方的場上的所有【無】寶可夢的弱點全部消除。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ころがる",
				'zh-tw': "滾動",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687760,
				tcgplayer: 571736,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Illustration rare",
	dexId: [206],
};

export default card;
