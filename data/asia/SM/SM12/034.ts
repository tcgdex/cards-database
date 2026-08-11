import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラミドロ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "凶暴で 寄ってきた 相手に 毒液を 吹きかける。 なぜだか ダダリンとだけは とっても 仲良し。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくばいよう" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンがどくなら、そのどくでのせるダメカンの数は10個になる。",
			},
		},
		{
			name: { ja: "するどいひれ" },
			damage: 40,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554848,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "クズモー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [691],
};

export default card;
