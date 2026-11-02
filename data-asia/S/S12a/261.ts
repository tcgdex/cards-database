import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナVSTAR",
	},

	illustrator: "AKIRA EGAWA",
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
				cardmarket: 687823,
				tcgplayer: 571791,
			},
		},
	],

	evolveFrom: {
		ja: "ギラティナV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Secret Rare",
	dexId: [487],
};

export default card;
