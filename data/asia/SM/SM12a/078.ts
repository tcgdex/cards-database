import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゾロア",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やみにかくれる" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544016,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [570],
};

export default card;
