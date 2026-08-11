import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリューGX",
	},

	illustrator: "ConceptLab",
	category: "Pokemon",
	hp: 250,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 130,
			cost: ["Water", "Lightning", "Colorless"],
		},
		{
			name: { ja: "てんくうのさばき" },
			damage: 270,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
		{
			name: { ja: "マッハデリバリーGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札が10枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557065,
			},
		},
	],

	evolveFrom: {
		ja: "ハクリュー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [149],

	suffix: "GX",
};

export default card;
