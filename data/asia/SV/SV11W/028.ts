import { Card } from "../../../interfaces";
import Set from "../SV11W";

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
		{ name: { ja: "けとばす" }, damage: 10, cost: ["Colorless"] },
		{
			name: { ja: "エレキック" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [522],
	thirdParty: {
		cardmarket: 829030,
		tcgplayer: 636581,
	},
};

export default card;
