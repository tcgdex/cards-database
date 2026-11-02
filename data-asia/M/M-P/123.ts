import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "走りまわって 体温を 上げると 炎エネルギーが 体を 巡り 本来の 力を 発揮できる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "えだづき" },
			damage: "20×",
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891852,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [813],
};

export default card;
