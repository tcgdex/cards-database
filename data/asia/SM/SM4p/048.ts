import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルナアーラ",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'ja-jp': "コスモッグが 進化した ♀だと いわれる。 第３の 眼が 浮かぶとき 別世界へと 飛び去っていく。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "バーストボール" },
			damage: "40×",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このポケモンについている[超]エネルギーの数x40ダメージ。",
			},
		},
		{
			name: { ja: "がちりんのつばさ" },
			damage: 130,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560081,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コスモウム",
	},

	retreat: 2,
	rarity: "None",
	dexId: [792],
};

export default card;
