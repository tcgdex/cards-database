import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルクシオ",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "仲間と 尻尾を つなげると より 強力な 電撃を ツメから 出すことが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かじりつく" },
			damage: 60,
			cost: ["Lightning", "Lightning"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863541,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コリンク",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [404],
};

export default card;
