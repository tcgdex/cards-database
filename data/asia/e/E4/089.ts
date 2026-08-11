import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴーレム",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [76],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "クリスタルタイプ",
			},
			effect: {
				'ja-jp': "手からゴーレムに草、火、または基本エネルギーカードとの戦いをするときはいつでも、ゴーレムのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "ロックスロー",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Grass", "Fire", "Colorless"],
			name: {
				'ja-jp': "地球爆弾",
			},
			effect: {
				'ja-jp': "ゴーレムはそれ自体に20のダメージを与えます。この攻撃は、各ベンチポケモン（あなたと相手）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
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
			stamp: ["1st edition"],
		},
	],
};

export default card
