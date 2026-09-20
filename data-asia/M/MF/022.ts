import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ジヘッド",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "２つの 頭は 好みが 違う。 頭同士 争うことで だれの 力も 借りずに 強くなるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ぶちかます" },
			damage: 50,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908384,
			},
		},
	],

	evolveFrom: {
		ja: "モノズ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [634],
};

export default card;
