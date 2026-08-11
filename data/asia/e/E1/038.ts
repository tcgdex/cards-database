import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Electabuzz",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [125],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーの引き分け",
			},
			effect: {
				ja: "デッキを検索して基本的なエネルギーカードを検索し、electabuzzに添付してください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "エネルギーを反映します",
			},
			effect: {
				ja: "ベンチ付きポケモンがあり、ElectAbuzzに基本的なエネルギーカードが付いている場合は、それらのエネルギーカードの1枚を取り、それらのポケモンの1つに取り付けます。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
