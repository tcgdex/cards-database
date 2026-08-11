import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オシャマリ",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "仲間を 思う 気持ちが 強い。 トレーナーが 落ち込んでいると ダンスを 踊って 励まそうとする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハイパーボイス" },
			damage: 40,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888257,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アシマリ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [729],
};

export default card;
