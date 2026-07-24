import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナトーン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "満月の 夜になると 活発に 活動するため 月の 満ち欠けと 関係していると 言われている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かいふくふうじ" },
			effect: {
				ja: "自分の場に「ソルロック」がいるなら、おたがいのポケモン全員のHPは、回復しない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ルナブラスト" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560085,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [337],
};

export default card;
