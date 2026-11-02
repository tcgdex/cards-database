import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ユクシー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "セットアップ" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札が7枚になるように、自分の山札からカードを引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコリストア" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分と自分についているすべてのカードを、好きな順番にして、自分の山札の一番下にもどしてよい。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908326,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [480],
};

export default card;
