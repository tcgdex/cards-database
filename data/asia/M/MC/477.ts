import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジヘッド",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "縄張りの エサを 食べつくすと ほかの 土地へ 移動する。 ２つの 頭は 仲が 悪い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルアタック" },
			damage: "40×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×40ダメージ。",
			},
		},
		{
			name: { ja: "しっこくのキバ" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863779,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モノズ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [634],
};

export default card;
