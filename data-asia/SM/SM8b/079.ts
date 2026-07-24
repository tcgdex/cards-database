import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "レアコイル",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "ほぼ コイル ３倍の 電力。 太陽の黒点が 多いとき なぜか 大量発生。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Metal"],
		},
		{
			name: { ja: "でんじほう" },
			damage: 80,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「でんじほう」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550881,
			},
		},
	],

	evolveFrom: {
		ja: "コイル",
	},

	retreat: 2,
	rarity: "None",
	dexId: [82],
};

export default card;
