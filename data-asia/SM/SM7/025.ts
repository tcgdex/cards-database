import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルコ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なみをのみこむ" },
			damage: 50,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x50ダメージぶん、このポケモンのHPを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558986,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [320],
};

export default card;
