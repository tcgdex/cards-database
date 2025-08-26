import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのピッジー（u）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [16],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "メッセンジャー",
			},
			effect: {
				ja: "KogaのPidgeyとすべてのカードをデッキの上に置きます。次に、Koga's Pidgeyという名前ではない基本的なポケモンまたはEvolutionカードを検索します。そのカードを相手に見せて、それを手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "翼攻撃",
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
