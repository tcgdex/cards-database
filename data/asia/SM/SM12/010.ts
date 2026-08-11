import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュナイパー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "矢羽を つがえ 相手に 放つ。 絶対 外せない時は 頭の ツルを引き 集中 するのだ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ちょくげきひこう" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "トラッキングシュート" },
			damage: 80,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメカンがのっている相手のベンチポケモン1匹にも、80ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554768,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "フクスロー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [724],
};

export default card;
