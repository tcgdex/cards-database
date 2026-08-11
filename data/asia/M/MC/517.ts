import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メルタン",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'ja-jp': "金属を 溶かして 食べてしまう。 液体金属を 循環させて 体内で エネルギーを つくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 10,
			cost: ["Metal"],
		},
		{
			name: { ja: "ビーム" },
			damage: 40,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863819,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [808],
};

export default card;
