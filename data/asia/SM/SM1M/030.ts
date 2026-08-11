import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガントル",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "洞窟で 地下水を 探す。 水自体は 得意では ないので ちびりちびりと ゆっくり 舐める。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "いわとばし" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
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
				cardmarket: 561631,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ダンゴロ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [525],
};

export default card;
