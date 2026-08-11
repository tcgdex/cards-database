import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "ウロコを 叩き 気持ちを 伝える。 ジャラコの 棲む 高山では 金属音が 木霊する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ひっぱたく" },
			damage: 20,
			cost: ["Lightning", "Fighting"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560284,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [782],
};

export default card;
