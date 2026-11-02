import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブV",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひるがえす" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ミステリーウェーブ" },
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587012,
				tcgplayer: 571466,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [826],
};

export default card;
