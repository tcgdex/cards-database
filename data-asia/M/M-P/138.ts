import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コソクムシ",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "よわごし" },
			effect: {
				ja: "相手の場に「ポケモンex」がいるなら、このポケモンはにげるためのエネルギーが、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 897864,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [767],
};

export default card;
