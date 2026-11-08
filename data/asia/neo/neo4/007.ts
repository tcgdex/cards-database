import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スキスター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [123],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "敏ility性",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Scytherに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				'ja-jp': "鋭い鎌",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
