import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "テレパシーで 仲間と 交信する。 植物と ある種の タイプの 遺伝子を 併せ持つと いう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくたまなげ" },
			damage: "20×",
			cost: ["Grass"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560034,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [102],
};

export default card;
