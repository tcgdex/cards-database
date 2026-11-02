import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "レディバ",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "寒くなると あちこちから レディバが たくさん 集まって 寄り添いあい 温め合う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびだしヘッド" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863306,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [165],
};

export default card;
