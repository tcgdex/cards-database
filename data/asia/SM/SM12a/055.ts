import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミュウ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "あらゆる 技を 使うため ポケモンの 先祖と 考える 学者が たくさん いる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ベンチバリア" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコパワー" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ダメカン3個を、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543816,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [151],
};

export default card;
