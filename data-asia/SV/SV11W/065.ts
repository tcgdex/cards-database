import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ギアル",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "２つの 体は 組み合わせが 決まっている。 別の 体とは かみ合わずに 離れてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かたいギア" },
			damage: 10,
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	resistances: [{ type: "Grass", value: "-30" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [599],
};

export default card;
