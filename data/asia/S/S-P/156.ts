import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カビゴン",
		'zh-tw': "亞玄",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'ja-jp': "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はりて" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "いちげきタックル" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 534097,
				tcgplayer: 597354,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [143],
};

export default card;
