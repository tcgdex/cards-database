import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケッキングex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さぼりたいしつ" },
			effect: {
				'ja-jp': "相手の場に「ポケモンex・V」がいないなら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "グレートスイング" },
			damage: 280,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863885,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤルキモノ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [289],

	suffix: "EX",
};

export default card;
