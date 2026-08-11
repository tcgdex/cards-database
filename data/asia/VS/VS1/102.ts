import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ランスのキングドラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [230],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "アクアウェーブ",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
