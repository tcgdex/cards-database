import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "コジオ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863718,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [932],
};

export default card;
