import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ギモー",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "負の 感情を 吸い取って エネルギーにしている ポケモン。 マイナス思考の 人に 人気。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 30,
			cost: ["Psychic"],
		},
		{
			name: { ja: "けとばす" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863646,
			},
		},
	],

	evolveFrom: {
		ja: "ベロバー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [860],
};

export default card;
