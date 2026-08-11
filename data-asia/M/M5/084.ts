import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "トサキント",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888629,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [118],
};

export default card;
