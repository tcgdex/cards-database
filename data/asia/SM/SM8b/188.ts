import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レアコイル",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'ja-jp': "ほぼ コイル ３倍の 電力。 太陽の黒点が 多いとき なぜか 大量発生。",
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
				'ja-jp': "次の自分の番、このポケモンは「でんじほう」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551436,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コイル",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [82],
};

export default card;
