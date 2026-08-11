import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロトノ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "月夜に 集まり 大合唱。 その鳴き声は 怒鳴り声のようで 美しくはないが 味が あるぞ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "てんこをとる" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札にある「ニョロモ」「ニョロゾ」「ニョロボン」を1枚ずつ、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "ハイパージャンプ" },
			damage: 100,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561541,
			},
		},
	],

	evolveFrom: {
		ja: "ニョロゾ",
	},

	retreat: 1,
	rarity: "None",
	dexId: [186],
};

export default card;
