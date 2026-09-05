import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "アメモース",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こわいもよう" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
		{
			name: { ja: "バグパニック" },
			damage: "50×",
			cost: ["Grass"],
			effect: {
				ja: "自分の山札を下から7枚オモテにして、その中にある、ワザ「バグパニック」を持つポケモンの枚数×50ダメージ。オモテにしたポケモンは山札にもどして切る。残りのカードはトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900099,
				tcgplayer: 709230,
			},
		},
	],

	evolveFrom: {
		ja: "アメタマ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [284],
};

export default card;
