import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "スキスター",
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
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Scytherに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "鋭い鎌",
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
