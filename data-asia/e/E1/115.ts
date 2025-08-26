import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "アンファロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 100,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エネルギー接続",
			},
			effect: {
				ja: "ターン中（攻撃前）に好きなように、ベンチ付きPokmonの1つに基本的なエネルギーカードを取り、アクティブなPokmonに取り付けることができます。 Ampharosが特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				ja: "落雷",
			},
			effect: {
				ja: "Ampharosに取り付けられたすべての稲妻エネルギーカードを破棄できます。そうした場合、この攻撃のベースダメージは40ではなく80です。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
