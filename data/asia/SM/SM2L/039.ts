import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌメイル",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'ja-jp': "餌と 仲間の 区別が 曖昧。 仲良くなっても 平気で 溶かして 喰らおうと してくることが ある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶんれつ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にある「ヌメイル」を2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Water", "Fairy"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561443,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌメラ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [705],
};

export default card;
