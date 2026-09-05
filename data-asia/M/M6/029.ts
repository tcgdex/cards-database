import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ",
	},

	illustrator: "Hachinana",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "突き出た 鼻を ひくひくさせると どこの だれが どんな 夢を 見ているのか 全部 わかるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899932,
				tcgplayer: 709183,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [96],
};

export default card;
