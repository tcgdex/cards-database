import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "竹の 葉っぱの 揺れで 敵の 動きを 読む。 ケンカっ早いが 仲間への 情は 厚い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シメる" },
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手は相手自身の手札を、2枚トラッシュする。",
			},
		},
		{
			name: { ja: "あばれまわる" },
			damage: 170,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをこんらんにする。",
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
		ja: "ヤンチャム",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [675],
};

export default card;
