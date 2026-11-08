import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チルット",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "真綿の ような 翼の 手入れは 絶対に 欠かさない。 汚れると 水浴びをして きれいに 洗う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559337,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [333],
};

export default card;
