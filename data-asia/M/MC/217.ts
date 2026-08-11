import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アルクジラ",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "寒冷地で ５匹ほどの 群れを 作って 暮らす。 雪や 氷に 含まれる ミネラルが 大好き。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドレインフィン" },
			damage: 20,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863513,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [974],
};

export default card;
