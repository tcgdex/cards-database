import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やみのキバ" },
			damage: 40,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908381,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [570],
};

export default card;
