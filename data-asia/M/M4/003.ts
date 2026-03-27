import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアーex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ビーランブル" },
			damage: "110x",
			cost: ["Grass"],
			effect: {
				ja: "このワザのダメージは、自分の場にいる名前に「スピアー」のつくポケモンの数×110。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "コクーン",
	},

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [15],

	suffix: "EX",
};

export default card;
