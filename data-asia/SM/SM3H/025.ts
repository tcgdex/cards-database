import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "行き倒れた者の 怨念が 子どもが つくった 砂山に 取りつき 誕生 したのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いのちをすいとる" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561089,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [769],
};

export default card;
