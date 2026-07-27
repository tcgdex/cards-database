import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ダルマッカ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "ダルマッカの フンは 熱いので 昔の 人は 懐に 入れて 体を 温めていたのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ニトロチャージ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[炎]エネルギーを1枚、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557365,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [554],
};

export default card;
