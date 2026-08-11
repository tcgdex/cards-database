import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "フカマル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いわがくれ" },
			effect: {
				ja: "このポケモンに[闘]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559855,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [443],
};

export default card;
