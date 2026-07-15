import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のデルビル",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "様々な 鳴き声を 使い分け 仲間と コミュニケーションしながら 狩りを おこなう 賢さを持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひをはく" },
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863393,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [228],
};

export default card;
