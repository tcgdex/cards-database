import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エアームド",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "いばらの 中に 巣を作る。 トゲで 傷つきながら 育てられた ヒナの 羽は 硬くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スチールカッター" },
			damage: "40×",
			cost: ["Metal"],
			effect: {
				'ja-jp': "自分の手札から「基本[M]エネルギー」を2枚までトラッシュし、その枚数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888318,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [227],
};

export default card;
