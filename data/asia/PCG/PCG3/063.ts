import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Rocket's Zapdos Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "闇のガード",
			},
			effect: {
				'ja-jp': "RocketのZapdos Exがそれに付着した暗闇のエネルギーを持っている限り、RocketのZapdos Exに与えられたダメージは、相手の攻撃によって10削減されます（脱力と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "プラズマ",
			},
			effect: {
				'ja-jp': "廃棄物のエネルギーカードを廃棄することを検索し、RocketのZapdos Exに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "荒れ狂う雷",
			},
			effect: {
				'ja-jp': "この攻撃は、ポケモンの1つに30ダメージを与えます。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
