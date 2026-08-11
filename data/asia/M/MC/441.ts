import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴース",
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふしぎなビーム" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ガスでつつむ" },
			damage: 30,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863743,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [92],
};

export default card;
