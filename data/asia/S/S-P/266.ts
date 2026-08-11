import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レジギガス",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "縄で 縛った 大陸を 引っ張って 動かしたという 伝説が 残されている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かたならし" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ダブルインパクト" },
			damage: "120×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数×120ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606611,
				tcgplayer: 597439,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [486],
};

export default card;
