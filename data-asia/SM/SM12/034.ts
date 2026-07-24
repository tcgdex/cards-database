import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラミドロ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "凶暴で 寄ってきた 相手に 毒液を 吹きかける。 なぜだか ダダリンとだけは とっても 仲良し。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくばいよう" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、そのどくでのせるダメカンの数は10個になる。",
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
		ja: "クズモー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [691],
};

export default card;
