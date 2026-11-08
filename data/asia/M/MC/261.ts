import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレザード",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "かつて 滅びた 砂漠の 国で 大事に されていた。 財宝と ともに ガラル地方へ やってきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ワイルドボルト" },
			damage: 70,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863557,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エリキテル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [695],
};

export default card;
