import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "するどいツメを、指の中にかくしている。いきなり伸ばして、おそってきた相手をひるませる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを3枚投げ、「おもて」の数×10のダメージ。",
			},
		},
		{
			name: { ja: "ふくろだたき" },
			damage: "20×",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分の場にいるポケモンの数ぶんコインを投げ、「おもて」の数×20のダメージ。",
			},
		},
	],

	weaknesses: [],
	resistances: [{ type: "Psychic", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908318,
			},
		},
	],

	retreat: 0,
	rarity: "Classic Collection",
	dexId: [215],
};

export default card;
