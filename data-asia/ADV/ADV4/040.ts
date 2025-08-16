import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Voltorb",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "充電",
			},
			effect: {
				ja: "デッキを検索して、Lightning Energy Cardを使用して、Voltorbに取り付けます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "ローリング攻撃",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};
