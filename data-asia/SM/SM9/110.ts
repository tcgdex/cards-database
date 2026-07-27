import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィ&フシギバナGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きけんなかふん" },
			damage: 50,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくとやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 150,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
		},
		{
			name: { ja: "エバーグリーンGX" },
			damage: 180,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを、すべて回復する。追加で[草]エネルギーが1個ついているなら、自分のトラッシュにあるカードをすべて山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558485,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [251, 3],

	suffix: "TAG TEAM-GX",
};

export default card;
