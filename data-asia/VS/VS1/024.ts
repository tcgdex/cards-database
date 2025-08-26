import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "MortyのNoctowl",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [164],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スルーを見てください",
			},
			effect: {
				ja: "相手の手を見てください。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ダブルペック",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
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
