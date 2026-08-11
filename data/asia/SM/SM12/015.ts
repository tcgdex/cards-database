import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシ",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "オスは 普段 だらだら しているが 強敵が 襲ってくると わが身を かえりみず 仲間を 守るぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うずまくごうか" },
			damage: 70,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについている「ポケモンのどうぐ」と「特殊エネルギー」を、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 140,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554788,
			},
		},
	],

	evolveFrom: {
		ja: "シシコ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [668],
};

export default card;
