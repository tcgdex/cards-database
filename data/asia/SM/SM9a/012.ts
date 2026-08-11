import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケロマツ",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "胸と 背中から 泡を 出す。 弾力のある 泡で 攻撃を 受け止めて ダメージを 減らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんこうせっか" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558199,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [656],
};

export default card;
