import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダークライ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		'ja-jp': "人々を 深い 眠りに 誘い 夢を 見せる 能力を 持つ。 新月の 夜に 活動する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ナイトメアスター" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札にある[悪]エネルギーを2枚、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アビススリープ" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544011,
			},
		},
	],

	retreat: 2,
	regulationMark: "B",
	rarity: "Rare Holo",
	dexId: [491],
};

export default card;
