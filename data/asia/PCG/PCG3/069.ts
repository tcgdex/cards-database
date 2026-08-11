import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Rocket's Suicune Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [245],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "暗くて明確です",
			},
			effect: {
				ja: "RocketのSuicune Exが暗闇のエネルギーを持っている限り、RocketのSuicune Exは特別な条件の影響を受けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "氷の風",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "ハイパースプラッシュ",
			},
			effect: {
				ja: "防御ポケモンがステージ2の進化したポケモンである場合、この攻撃は50ダメージに加えて40ダメージを与えます。",
			},
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
