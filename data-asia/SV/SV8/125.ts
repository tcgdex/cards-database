import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "シャリタツex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいうちポンプ" },
			damage: 100,
			cost: ["Fire", "Water"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "シナバールアー" },
			cost: ["Fire", "Water", "Darkness"],
			effect: {
				ja: "自分の山札を上から10枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793590,
				tcgplayer: 587715,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [978],

	suffix: "EX",
};

export default card;
