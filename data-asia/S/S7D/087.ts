import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "クレセリア",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みなぎるひかり" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札から「基本[P]エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "オーロラビーム" },
			damage: 90,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572069,
				tcgplayer: 569410,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Secret Rare",
	dexId: [488],
};

export default card;
