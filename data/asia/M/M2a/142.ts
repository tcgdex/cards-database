import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホップのバイウールー",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "立派に 伸びた ツノは 異性に アピールするために 生えている。 武器として 使うことはない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "チャレンジホーン" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861385,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861756,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861757,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ホップのウールー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [832],
};

export default card;
