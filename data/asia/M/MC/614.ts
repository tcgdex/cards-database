import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オンバット",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クイックドロー" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863916,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [714],
};

export default card;
