import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レントラーex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "つきさすがんこう" },
			damage: 120,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の手札を見て、その中からカードを1枚選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ボルトストライク" },
			damage: 250,
			cost: ["Lightning", "Lightning"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863542,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ルクシオ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [405],

	suffix: "EX",
};

export default card;
