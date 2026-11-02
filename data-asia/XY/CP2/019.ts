import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スカイブレード" },
			damage: "70+",
			cost: ["Water", "Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチに「ラティアス」がいるなら、50ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563500,
				tcgplayer: 605343,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [381],
};

export default card;
