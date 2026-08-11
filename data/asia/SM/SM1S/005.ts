import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パラセクト",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "大きな キノコが パラセクトを 操っている。 よく マシェードと 縄張り争いを している。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "れんぞくぎり" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、60ダメージ追加。すべてオモテなら、120ダメージ追加。",
			},
		},
		{
			name: { ja: "きのこドレイン" },
			damage: 70,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561679,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "パラス",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [47],
};

export default card;
