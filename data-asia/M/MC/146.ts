import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グレンアルマex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アーマーキャノン" },
			damage: 200,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについている[R]エネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863442,
			},
		},
	],

	evolveFrom: {
		ja: "カルボウ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [936],

	suffix: "EX",
};

export default card;
