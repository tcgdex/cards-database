import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モウカザル",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "尻尾の 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "チョップ" },
			damage: 40,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "ヒートブロー" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863400,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒコザル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [391],
};

export default card;
