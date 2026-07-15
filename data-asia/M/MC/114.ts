import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バオップ",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "知能が 高く 木の実は 焼いてから 食べる 習性。 人の 手伝いを 好んでいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863410,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [513],
};

export default card;
