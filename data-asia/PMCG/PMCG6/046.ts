import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのマイムさん",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [122],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "手の手",
			},
			effect: {
				ja: "手から最大3枚のカードを選択し、デッキの上に置きます。次に、その多くの基本エネルギーカードをデッキに検索します。それらのカードを相手に見せてから、それらを手に入れます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "平手打ち",
			},
			damage: 20,
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
