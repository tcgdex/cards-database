import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリリ",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぴょんぴょんチャージ" },
			cost: [],
			effect: {
				ja: "自分の山札からエネルギーを1枚選び、ベンチポケモンにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900112,
				tcgplayer: 709239,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [298],
};

export default card;
