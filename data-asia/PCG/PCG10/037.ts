import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Claydol Ex",
	},

	rarity: "Rare Holo",
	category: "Pokemon",
	dexId: [344],
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "タイプシフト",
			},
			effect: {
				ja: "ターン中（攻撃前）に、このパワーを使用できます。 Claydol Exのタイプは、あなたのターンの終わりまで戦っています。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "サイキックブーム",
			},
			effect: {
				ja: "20ダメージに加えて、防御ポケモンに付着した各エネルギーに対してさらに10ダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "シャドウクラッシュ",
			},
			effect: {
				ja: "Claydol Exに取り付けられたサイキックエネルギーカードを捨てることができます。もしそうなら、防御ポケモンに取り付けられたエネルギーカードを捨ててください。",
			},
			damage: 60,
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
