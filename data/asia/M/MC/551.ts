import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "コライドンex",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほうふくてっつい" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
		{
			name: { ja: "カイザータックル" },
			damage: 280,
			cost: ["Fire", "Fighting", "Fighting"],
			effect: {
				ja: "このポケモンにも60ダメージ。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863853,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1007],

	suffix: "EX",
};

export default card;
