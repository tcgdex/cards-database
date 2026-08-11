import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "Dugtrio",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [51],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "砂ベール",
			},
			effect: {
				ja: "対戦相手の攻撃によってベンチされたポケモンに与えられたすべての損害を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "下を掘ります",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ダブルエッジ",
			},
			effect: {
				ja: "Dugtrioはそれ自体に10ダメージを与えます。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
