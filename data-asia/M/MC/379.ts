import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "喜びや 怒りと いった 感情を 波の形 として 見分ける 不思議な力を 持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863681,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [447],
};

export default card;
