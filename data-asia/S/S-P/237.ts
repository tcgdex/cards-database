import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィア",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "恐ろしい ドラゴンポケモンを 美しい ニンフィアが 退治する 童話が ガラル地方に 残る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おあずけキック" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。",
			},
		},
		{
			name: { ja: "シンフォニーウィップ" },
			damage: "70+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "この番、手札からサポートを出して使っていたなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606606,
				tcgplayer: 597419,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [700],
};

export default card;
