import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Salamence Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [373],
	hp: 160,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ドラゴンリフト",
			},
			effect: {
				ja: "Pokã©Mon（Pokã©Mon-ExとBabyPokã©Monを除く）のリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "炎ジェット",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
		},
		{
			cost: ["Fire", "Water", "Colorless", "Colorless"],
			name: {
				ja: "明るい炎",
			},
			effect: {
				ja: "Salamence Exに取り付けられた2つのエネルギーを捨てます。",
			},
			damage: 120,
		},
	],

	retreat: 2,

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
