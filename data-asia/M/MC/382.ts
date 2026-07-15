import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "グレッグル",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "毒袋を ふくらませて 鳴らし あたりに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひらてうち" },
			damage: 20,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863684,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [453],
};

export default card;
