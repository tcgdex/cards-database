import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "コソクムシ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "ビーチから 海底まで 色んな 場所に 棲む。 腐った餌でも 喜び 食べる 自然の掃除屋。",
	},

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
				cardmarket: 899798,
				tcgplayer: 709164,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [767],
};

export default card;
