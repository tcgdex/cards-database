import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "カリキリ",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "落ち着いて 日光浴 できるよう カリキリ専用の フラワーポットを 与える トレーナーも 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888227,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [753],
};

export default card;
