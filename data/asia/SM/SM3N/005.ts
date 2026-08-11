import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モジャンボ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "植物の ツルで できた 腕を 伸ばして 獲物を 絡め取る。 腕を 食べられても へっちゃら。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "クロスウィップ" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561005,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モンジャラ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [465],
};

export default card;
