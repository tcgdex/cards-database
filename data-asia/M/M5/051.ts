import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "クスネ",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ほかの ポケモンが みつけた 餌を 掠めて 暮らしている。 ふかふかの 肉球は 足音を たてない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "うしろげり" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [827],

	thirdParty: {
		cardmarket: 888306,
	},
};

export default card;
