import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエのキュワワー",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ツルを 使って 花を 摘みとる。 体に つけた 花からは 癒しの 効果が 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなまねき" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンの「リーリエのポケモン」を好きなだけ選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "ぱっときえる" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863642,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [764],
};

export default card;
