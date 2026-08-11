import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンヂムシ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "頑丈な 殻で 身を 守る。 顎の 先端から 電気を 流して 反撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "バチバチ" },
			damage: 60,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863558,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アゴジムシ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [737],
};

export default card;
