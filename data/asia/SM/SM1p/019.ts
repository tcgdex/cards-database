import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナマコブシ",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "ビーチなど 浅い 海に 棲む。 身体から 体内器官を だして 餌を 捕ったり 敵と 戦う。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "とびだすなかみ" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "れんぞくころがり" },
			damage: "30×",
			cost: ["Water"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561547,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [771],
};

export default card;
