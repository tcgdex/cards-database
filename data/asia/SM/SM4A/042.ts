import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チルット",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "人の 頭の 上に ちょこんと 乗って 帽子のように ふるまうのが なぜか 大好き。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560288,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [333],
};

export default card;
