import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のベトベター",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "どんな 隙間でも 入り込める 柔軟な 体は 敵の アジトに 侵入するときに 役立つぜ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: { ja: "どろかけ" },
			damage: 30,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563727,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [88],
};

export default card;
