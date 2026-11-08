import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナエトル",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "太陽の 光を 浴びて 全身で 光合成を する。 甲羅は 土が 硬くなったもの。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいこうら" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "このは" },
			damage: 30,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863325,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [387],
};

export default card;
