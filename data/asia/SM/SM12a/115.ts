import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タブンネ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "耳の 触角で 相手の 体調や タマゴから ポケモンが いつ でてくるのかも わかるのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ヒヤリング" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドレインビンタ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544211,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [531],
};

export default card;
