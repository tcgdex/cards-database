import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アオキのネッコアラ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "ネッコアラの よだれを 薄めると 強力な 麻酔薬になる。 昔の 手術に 使われた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "むきりょくチャージ" },
			effect: {
				'ja-jp': "このポケモンがベンチにいるなら、自分の番に1回使える。自分の手札からエネルギーを1枚選び、バトル場の「アオキのポケモン」につける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "いねむりドロー" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンをねむりにする。自分の山札を2枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863921,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [775],
};

export default card;
