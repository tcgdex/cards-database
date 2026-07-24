import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "モンジャラ",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "たくさんの うごめく ツルに 覆われて 正体不明。 青いツルは 一生 伸びる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくどく" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556560,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [114],
};

export default card;
