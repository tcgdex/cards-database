import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのウールー",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "毛が 伸びすぎると 動けない。 ウールーの 体毛で 織られた 布は 驚くほど 丈夫。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861384,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861754,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861755,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [831],
};

export default card;
