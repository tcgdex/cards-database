import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力は 弱く 頼りないのに 繁殖力だけ 物凄い。 飽きるほど みかけるぞ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "もぐる" },
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たきのぼりしんか" },
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560252,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [129],
};

export default card;
