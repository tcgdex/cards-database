import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダストダス",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "左腕で 相手を 絞めつけて 口から 吐き出す 悪臭の 毒ガスで とどめを 刺すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ガスでつつむ" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ダストシュート" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863768,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤブクロン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [569],
};

export default card;
