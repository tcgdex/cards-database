import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "チェリンボ",
		'zh-tw': "櫻花寶",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "体が 赤い チェリンボほど 栄養が 多く 玉の 味も 甘くて おいしいよ。",
		'zh-tw': "身體越紅的櫻花寶含有的營養越豐富，味道也很甜很好吃。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はつらつかじつ",
				'zh-tw': "活潑果實",
			},
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "このは",
				'zh-tw': "樹葉",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586520,
				tcgplayer: 571258,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578356,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [420],
};

export default card;
