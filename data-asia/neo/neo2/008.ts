import { Card } from "../../../interfaces"
import Set from "../neo2"

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
			cost: ["Grass", "Grass"],
			name: {
				ja: "フューリーカッター",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、正確に1がヘッドの場合は10ダメージに加えて10ダメージを加え、正確に2がヘッドである場合は20ダメージ、または正確に3がヘッドである場合は40ダメージ、4つすべてがヘッドである場合は80ダメージを与えます。",
			},
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
