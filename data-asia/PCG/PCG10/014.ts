import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラジケン",
	},

	rarity: "Rare Holo",
	category: "Pokemon",
	dexId: [257],
	hp: 100,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "Firestarter",
			},
			effect: {
				ja: "ターン中に（攻撃の前）、廃棄パイルからベンチポカモンの1つにファイアエネルギーカードを取り付けることができます。 Blazikenが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "火の流れ",
			},
			effect: {
				ja: "Blazikenに取り付けられた消防エネルギーカードを廃棄します。この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
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
