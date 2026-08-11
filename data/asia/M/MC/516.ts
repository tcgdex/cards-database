import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メルタン",
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "金属を 溶かして 食べてしまう。 液体金属を 循環させて 体内で エネルギーを つくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 50,
			cost: ["Metal", "Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863818,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [808],
};

export default card;
