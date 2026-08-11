import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "大きな 耳で 地面を 掘って 巣穴を 作る。 一晩中 休まずに 掘り続けられる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マッドショット" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560291,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [659],
};

export default card;
