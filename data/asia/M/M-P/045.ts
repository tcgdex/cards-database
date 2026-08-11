import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザード",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "燃える 尻尾を 振りまわすと まわりの 温度が どんどん 上がって 相手を 苦しめる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひをはく" },
			damage: 40,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 858263,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトカゲ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [5],
};

export default card;
