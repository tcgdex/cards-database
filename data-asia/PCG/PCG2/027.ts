import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ルディコロ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [272],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スイングダンス",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、カードを描くことができます。 Ludicoloが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "癒しのステップ",
			},
			effect: {
				ja: "あなたはあなたの手から好きなだけ多くのカードを捨てることができます。  そうした場合は、Ludicoloからその多くのダメージカウンターを削除します。",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "円形のステップ",
			},
			effect: {
				ja: "Ludicoloを除く、Pokemonの数（あなたと対戦相手の両方）の数を10回ダメージします。",
			},
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
