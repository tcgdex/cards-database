import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミルタンク",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "ミルクを 採るため 育てる 人が ほとんどだが かなり たくましくて タフなので 戦いにも 向いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミルクほう" },
			damage: "60×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の手札にある「モーモーミルク」を好きなだけ相手に見せて、その枚数x60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558710,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [241],
};

export default card;
