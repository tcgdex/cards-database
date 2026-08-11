import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "前触れもなく 突然 怒る。 暴れまくって 誰も いなくなると 孤独に 耐えられなくて また怒る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さんだんづき" },
			damage: "10×",
			cost: ["Fighting"],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560269,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [56],
};

export default card;
