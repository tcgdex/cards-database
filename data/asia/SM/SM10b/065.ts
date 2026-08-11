import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーゴヨンGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ウルトラへんかん" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の手札にある「ウルトラビースト」を1枚トラッシュする。その後、山札を3枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベノムシュート" },
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン1匹に、170ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "インジェクションGX" },
			cost: ["Lightning"],
			effect: {
				'ja-jp': "相手のトラッシュにある好きなカードを1枚、相手に見せてから、ウラにして相手のサイドとして置く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557267,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベベノム",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [804],

	suffix: "GX",
};

export default card;
