import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Dusclops",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [356],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "呪われたまぶしさ",
			},
			effect: {
				'ja-jp': "DusclopsがアクティブなPokã©Monである限り、相手は彼または彼女の手からアクティブなPokã©Monに特別なエネルギーカード（暗闇と金属のエネルギーカードを除く）を添付することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "will-o'-the-wisp",
			},
			damage: 30,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "サイキックシールド",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、相手のポケモンエクスによるダスクロップに行われるダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 50,
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
