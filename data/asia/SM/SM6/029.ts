import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレザード",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "電気で 筋肉を 刺激すると １００メートルを ５秒で 走る 脚力に パワーアップする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ショックウェーブ" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559574,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エリキテル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [695],
};

export default card;
