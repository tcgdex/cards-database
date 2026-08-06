import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウV",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エナジーミックス" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札からエネルギーを1枚選び、自分の「フュージョン」のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "サイコジャンプ" },
			damage: 70,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576183,
				tcgplayer: 569606,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [151],
};

export default card;
