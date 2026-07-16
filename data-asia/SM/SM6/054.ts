import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "竹の 葉っぱの 揺れで 敵の 動きを 読む。 ケンカっ早いが 仲間への 情は 厚い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あらくれパンチ" },
			damage: "50+",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、50ダメージ追加し、おたがいのバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ダブルスタンプ" },
			damage: "80+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559599,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンチャム",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [675],
};

export default card;
