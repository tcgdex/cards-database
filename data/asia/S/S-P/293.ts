import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリューVSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "ギガインパクト" },
			damage: 250,
			cost: ["Water", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
		{
			name: { ja: "ドラゴニックスター" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から12枚見て、その中から[W]または[L]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664348,
				tcgplayer: 597466,
			},
		},
	],

	evolveFrom: {
		ja: "カイリューV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [149],
};

export default card;
