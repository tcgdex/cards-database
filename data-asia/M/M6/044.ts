import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "イトマル",
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "細くて 丈夫な 糸を 張り巡らして 罠を 仕掛けると 獲物が かかるのを ひたすら待つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくばり" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "バグパニック" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を下から7枚オモテにして、その中にある、ワザ「バグパニック」を持つポケモンの枚数×50ダメージ。オモテにしたポケモンは山札にもどして切る。残りのカードはトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899947,
				tcgplayer: 709197,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [167],
};

export default card;
