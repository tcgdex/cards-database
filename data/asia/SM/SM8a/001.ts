import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャビー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "感情を ださず 独りで いることを 好む。 信頼を 得るまでには 時間が かかるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメをだす" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558575,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [725],
};

export default card;
