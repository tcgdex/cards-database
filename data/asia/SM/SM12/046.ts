import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーマルド",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "陸に 暮らし 獲物を 求めて 海へ 狩りへと でかけていた。 鋭い ツメが 最大の 武器。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "エンシャントブラスト" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュにある「なぞの化石」の枚数×50ダメージ追加。",
			},
		},
		{
			name: { ja: "マッハクロー" },
			damage: 100,
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
				cardmarket: 554884,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アノプス",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [348],
};

export default card;
