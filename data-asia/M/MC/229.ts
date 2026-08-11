import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ゴローン",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "好物の 石の 影響で 全身が 電気を 帯びている。 とても 喧嘩っ早い 性格。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ころがりタックル" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ビリリパンチ" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863525,
			},
		},
	],

	evolveFrom: {
		ja: "アローライシツブテ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [75],
};

export default card;
