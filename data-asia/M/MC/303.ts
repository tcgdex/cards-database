import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブルー",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "じつは 臆病な 性格。 怯えているのが ばれないように 必死に 唸り声を あげる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863605,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [209],
};

export default card;
