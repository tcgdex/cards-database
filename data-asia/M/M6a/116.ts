import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けちをつける" },
			cost: ["Darkness"],
			effect: {
				ja: "相手は相手自身の手札をすべて山札にもどして切る。その後、相手は山札を4枚引く。",
			},
		},
		{
			name: { ja: "どつく" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908294,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [559],
};

export default card;
