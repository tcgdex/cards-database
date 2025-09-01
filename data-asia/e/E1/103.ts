import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "カリザード",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "燃焼エネルギー",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、すべてのPokmonに取り付けられたすべての基本エネルギーカードを、残りのターンのために火災エネルギーに変えることができます。 Charizardが特別な状態の影響を受けた場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "渦巻く渦巻き",
			},
			effect: {
				ja: "2つのコインをフリップします。それらの1つが尾の場合は、Charizardに取り付けられた2枚のエネルギーカードを破棄します。両方が尾の場合は、すべてのエネルギーカードをCharizardに取り付けます。",
			},
			damage: 120,
		},
	],

	retreat: 3,

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
