import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リザードンGX",
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
				'ja-jp': "このポケモンについている[炎]エネルギーを、3個トラッシュする。",
			},
		},
		{
			name: { ja: "レイジングアウトGX" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から10枚トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551541,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リザード",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [6],

	suffix: "GX",
};

export default card;
