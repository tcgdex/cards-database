import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "mewtwo（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタスイッチ",
			},
			effect: {
				'ja-jp': "ターン中に、手からMewtwoをベンチに置くと、Pokã©Monに取り付けられた基本エネルギーカードを他のPokã©Mon（Mewtwoを除く）に任意の方法で移動できます。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Metal"],
			name: {
				'ja-jp': "エネルギーバースト",
			},
			effect: {
				'ja-jp': "Mewtwoと防御ポケモンに付随するエネルギーの総量を10回ダメージします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
