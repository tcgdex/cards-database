import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン",
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "１日に 食べ物を ４００キロ 食べないと 気がすまない。 食べ終わると 眠ってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぐうたらプレス" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863870,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [143],
};

export default card;
