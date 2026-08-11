import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モウカザル",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "尻尾の 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。",
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
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
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
		ja: "ヒコザル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [391],
};

export default card;
