import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Steelix",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 100,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "レアメタル",
			},
			effect: {
				'ja-jp': "Steelixに取り付けられたすべての基本エネルギーカードは、通常のタイプではなく金属エネルギーを提供します。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				'ja-jp': "絞る",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが麻痺しています。",
			},
		},
		{
			cost: ["Metal", "Metal", "Metal", "Colorless"],
			name: {
				'ja-jp': "メタルテール",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、コインをひっくり返すことができます。頭の場合、この攻撃は80のダメージを与えます。尾の場合、この攻撃は何もしません。",
			},
			damage: 40,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
