import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテングGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "まどわす" },
			damage: 40,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "じんつうりき" },
			damage: "90+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ふくまでんGX" },
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹と、ついているすべてのカードを、相手の山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559066,
			},
		},
	],

	evolveFrom: {
		ja: "コノハナ",
	},

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [275],

	suffix: "GX",
};

export default card;
