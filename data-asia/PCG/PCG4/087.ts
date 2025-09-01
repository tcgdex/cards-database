import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Smeargle",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [235],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "変身",
			},
			effect: {
				ja: "ターン中（攻撃前）に（攻撃の前）、Pokã©Mon（Pokã©Mon-Exを除く）に1つに取り付けられた基本的なエネルギーカードを破棄できます。そうした場合は、廃棄パイルを検索して、基本的なエネルギーカード（廃棄したものを除く）を検索し、そのPokã©Monに取り付けます。 Smeargleが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スパイラルパンチを分割します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
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
