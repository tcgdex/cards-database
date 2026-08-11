import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヨーギラス",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		'ja-jp': "地底 奥深くで 生まれる。 まわりの 土を たいらげると 地上に 現われ サナギになる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "もぐる" },
			effect: {
				'ja-jp': "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558692,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [246],
};

export default card;
