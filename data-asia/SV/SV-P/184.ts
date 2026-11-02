import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ベラカスex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "さかさまドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を下から3枚引く。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "20+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793380,
				tcgplayer: 672425,
			},
		},
	],

	evolveFrom: {
		ja: "シガロコ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [954],

	suffix: "EX",
};

export default card;
