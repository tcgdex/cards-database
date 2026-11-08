import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナのフカマル",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いわとばし" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863678,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [443],
};

export default card;
