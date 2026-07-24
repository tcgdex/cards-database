import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ムクバード",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "大きな グループを 作って 行動する 習性。 グループ同士の 争いは 激しい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "つばさでうつ" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560351,
			},
		},
	],

	evolveFrom: {
		ja: "ムックル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [397],
};

export default card;
