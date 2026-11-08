import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザードンVMAX",
		'zh-tw': "天秤偶",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'ja-jp': "ツメできりさく",
				'zh-tw': "掌擊",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "キョダイゴクエン" },
			damage: 300,
			cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597305,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リザードンV",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [6],
};

export default card;
