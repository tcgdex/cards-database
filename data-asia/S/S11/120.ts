import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "ロストインパクト" },
			damage: 280,
			cost: ["Grass", "Psychic", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを2個選び、ロストゾーンに置く。",
			},
		},
		{
			name: { ja: "スターレクイエム" },
			cost: ["Grass", "Psychic"],
			effect: {
				ja: "このワザは、自分のロストゾーンにカードが10枚以上あるときにしか使えない。相手のバトルポケモンをきぜつさせる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668238,
				tcgplayer: 570051,
			},
		},
	],

	evolveFrom: {
		ja: "ギラティナV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [487],
};

export default card;
