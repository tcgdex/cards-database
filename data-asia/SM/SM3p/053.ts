import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "相手そっくりに 化けているように みせかけ だましたり 驚かして そのすきに 逃げ出すことが 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560211,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [570],
};

export default card;
