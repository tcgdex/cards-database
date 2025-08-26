import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "アロン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [304],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "自己充電",
			},
			effect: {
				ja: "手からアロンに金属エネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 20,
		},
	],

	retreat: 2,

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
