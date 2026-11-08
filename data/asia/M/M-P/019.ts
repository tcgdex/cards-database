import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クワッス",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "流れが 急な 川も 自由に 泳ぎまわる 脚力を 持つ。 きれい好きで 思い込みが 強い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つばめがえし" },
			damage: "10+",
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 839257,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [912],
};

export default card;
