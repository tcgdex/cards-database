import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルガモス",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "炎の りんぷんを まき散らす。 危険なのは 高熱よりも あたりの 酸素が なくなること。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのりんぷん" },
			damage: 80,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863419,
			},
		},
	],

	evolveFrom: {
		ja: "メラルバ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [637],
};

export default card;
