import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルガモスGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "れっかだん" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[炎]エネルギーを、1枚トラッシュする。その後、相手のポケモン1匹に、ダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バックファイヤー" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーを、2個手札にもどす。",
			},
		},
		{
			name: { ja: "だいねっぱGX" },
			cost: ["Fire"],
			effect: {
				ja: "相手の場のポケモン全員についているエネルギーを、1個ずつトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555087,
			},
		},
	],

	evolveFrom: {
		ja: "メラルバ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [637],

	suffix: "GX",
};

export default card;
