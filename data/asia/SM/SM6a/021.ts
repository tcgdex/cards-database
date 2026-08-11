import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒンバス",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "見た目が 悪いので 人気はないが 脅威の 生命力が あり 研究対象には なっている。",
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
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559273,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [349],
};

export default card;
