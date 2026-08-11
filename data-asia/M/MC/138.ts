import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ラビフット",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "多彩な キック技が 自慢だが 炎で 熱くなった 額で 繰り出す 頭突きも 強力。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ローキック" },
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: { ja: "かえん" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863434,
			},
		},
	],

	evolveFrom: {
		ja: "ヒバニー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [814],
};

export default card;
