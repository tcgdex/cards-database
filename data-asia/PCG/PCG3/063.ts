import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rocket's Zapdos Ex",
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
				ja: "闇のガード",
			},
			effect: {
				ja: "RocketのZapdos Exがそれに付着した暗闇のエネルギーを持っている限り、RocketのZapdos Exに与えられたダメージは、相手の攻撃によって10削減されます（脱力と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄物のエネルギーカードを廃棄することを検索し、RocketのZapdos Exに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "荒れ狂う雷",
			},
			effect: {
				ja: "この攻撃は、ポケモンの1つに30ダメージを与えます。",
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
