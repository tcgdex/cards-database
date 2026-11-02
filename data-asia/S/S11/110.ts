import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アビスシーク" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から4枚見て、その中からカードを2枚選び、手札に加える。残りのカードはロストゾーンに置く。",
			},
		},
		{
			name: { ja: "ひきさく" },
			damage: 160,
			cost: ["Grass", "Psychic", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668228,
				tcgplayer: 570041,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [487],
};

export default card;
