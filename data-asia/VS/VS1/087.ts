import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "カレンズラピダッシュ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [78],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スマッシュキック",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、カレンのRapidashに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
