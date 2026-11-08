import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Vaporeon",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [134],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "アクア供給",
			},
			effect: {
				'ja-jp': "あなたはあなたの手からあなたのポケモンの1にあなたの手からの基本的なエネルギーカードを添付することができます。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "マルチバブル",
			},
			effect: {
				'ja-jp': "Vaporeonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、ディフェンディングポケモンは眠っています。",
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
