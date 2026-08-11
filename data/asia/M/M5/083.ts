import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グレンアルマ",
	},

	illustrator: "Iwamoto05",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フレイムレギオン" },
			damage: "40+",
			cost: ["Fire"],
			effect: {
				'ja-jp': "[R]エネルギーがついている自分のベンチポケモンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888628,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カルボウ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [936],
};

export default card;
