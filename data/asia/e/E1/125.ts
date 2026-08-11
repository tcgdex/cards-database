import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Clefable",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [36],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "月光",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、あなたの手からカードをデッキに戻すことができます。そうした場合は、デッキを検索して、基本的なエネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。 Clefableが特別な状態の影響を受ける場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "doubleslap",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
