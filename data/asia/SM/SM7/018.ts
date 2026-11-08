import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バシャーモGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ばくえんきゃく" },
			damage: 210,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[炎]エネルギーを、2個トラッシュする。",
			},
		},
		{
			name: { ja: "ブレイズアウトGX" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手の場のポケモンについているエネルギーを、2個トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558979,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ワカシャモ",
	},

	retreat: 1,
	rarity: "Double rare",
	dexId: [257],

	suffix: "GX",
};

export default card;
