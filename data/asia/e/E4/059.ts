import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アエロダクチル",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [142],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "古代の風",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に、アエロダクチルがアクティブなポクモンである場合、ターンの終わりまですべてのポックボディを無視することができます。アエロダクチルが特別な状態の影響を受けている場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "上昇する突進",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
			},
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
