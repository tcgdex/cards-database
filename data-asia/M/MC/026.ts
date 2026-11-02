import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キノココ",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "危険を 感じると 頭の てっぺんから 毒の 胞子を ばらまき 身を 守る ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にどずつき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージ。",
			},
		},
		{
			name: { ja: "タネばくだん" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863317,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [285],
};

export default card;
