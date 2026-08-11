import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルナアーラGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "サイコトランス" },
			effect: {
				'ja-jp': "自分の番に何回でも使える。自分の場のポケモンについている[超]エネルギーを1個、自分の別のポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーレイ" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンのHPは、回復しない。",
			},
		},
		{
			name: { ja: "ルナフォールGX" },
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "相手のたねポケモン（「ポケモンGX」をのぞく）を1匹、きぜつさせる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551736,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コスモウム",
	},

	retreat: 2,
	rarity: "Secret Rare",
	dexId: [792],

	suffix: "GX",
};

export default card;
