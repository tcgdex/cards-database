import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "イワンコ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "昔から 人と 暮らしてきた。 トレーナーが 悲しんでいると それを 察して 側を 離れない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559597,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [744],
};

export default card;
