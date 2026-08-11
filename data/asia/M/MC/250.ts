import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シママ",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみの 光り方で 仲間と コミュニケーションを とっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エレキック" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863546,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [522],
};

export default card;
