import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ケッキングex",
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
				ja: "相手の場に「ポケモンex・V」がいないなら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "グレートスイング" },
			damage: 280,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
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
		ja: "ヤルキモノ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [289],

	suffix: "EX",
};

export default card;
