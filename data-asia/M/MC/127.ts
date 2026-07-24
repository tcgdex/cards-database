import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シシコ",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "強敵と 戦い 体と 心が 鍛えられた シシコほど たてがみの 温度は 高くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ずつき" },
			damage: 50,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863423,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [667],
};

export default card;
