import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マンムー",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "１万年前の 氷の 下から 発見された ことも あるほど 大昔から いた ポケモン。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ダブルスタンプ" },
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "ごういんタックル" },
			damage: "90+",
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにダメカンを9個までのせ、のせた数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560256,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イノムー",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [473],
};

export default card;
