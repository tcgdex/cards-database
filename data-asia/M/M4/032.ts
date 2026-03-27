import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコスピア" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このポケモンについているエネルギーがこのワザのコストより2個以上多い場合、相手のベンチポケモン1匹にも120ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [386],
};

export default card;
