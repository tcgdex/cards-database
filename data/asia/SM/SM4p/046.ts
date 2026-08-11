import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモッグ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "はかない ガス状の 身体。 大気の チリを 集めながら ゆっくりと 成長していく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "テレポート" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560079,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [789],
};

export default card;
