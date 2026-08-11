import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギガイアス",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		'ja-jp': "かなりの 馬力を 持っているので 建設関係者が 好んで パートナーに 選ぶ ポケモンだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ロックキャノン" },
			damage: "50×",
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "自分の場のポケモンについている[闘]エネルギーを好きなだけトラッシュし、その枚数x50ダメージ。",
			},
		},
		{
			name: { ja: "がんせきおとし" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561632,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ガントル",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [526],
};

export default card;
