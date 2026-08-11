import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴロンダ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "竹の 葉っぱの 揺れで 敵の 動きを 読む。 ケンカっ早いが 仲間への 情は 厚い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シメる" },
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手は相手自身の手札を、2枚トラッシュする。",
			},
		},
		{
			name: { ja: "あばれまわる" },
			damage: 170,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558603,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤンチャム",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [675],
};

export default card;
