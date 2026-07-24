import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ジジーロン",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "心優しい 性質。 だが 一度 怒りに かられると 激しい 息吹で あたりを 破壊 し尽くす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ためる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある基本エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "パワーサイクロン" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560112,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [780],
};

export default card;
