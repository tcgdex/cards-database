import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むげんのおもい" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札を1枚引く。自分のベンチに「ラティオス」がいるなら、さらに1枚引く。",
			},
		},
		{
			name: { ja: "スピードウイング" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563499,
				tcgplayer: 605342,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [380],
};

export default card;
