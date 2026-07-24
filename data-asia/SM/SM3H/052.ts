import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "つばさでうつ" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ぐれんのあらし" },
			damage: 300,
			cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーを、3個トラッシュする。",
			},
		},
		{
			name: { ja: "レイジングアウトGX" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から10枚トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561116,
			},
		},
	],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [6],

	suffix: "GX",
};

export default card;
