import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボーマンダex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ワイドブラスト" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ドラゴンインパクト" },
			damage: 300,
			cost: ["Fire", "Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863842,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コモルー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [373],

	suffix: "EX",
};

export default card;
