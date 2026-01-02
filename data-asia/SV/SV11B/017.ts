import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "魂を 吸い取って 燃やす。 腕の 炎を 揺らして 相手を 催眠状態に する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はじけるひばしら" },
			damage: "50+",
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュに「基本エネルギー」が10枚以上あるなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "もえつくす" },
			damage: 180,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ランプラー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [609],
};

export default card;
