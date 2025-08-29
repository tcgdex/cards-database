import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "f",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "検索[検索]",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、[F]、[I]、[i]、[n]、および[d]がベンチで[d]がない場合、デッキをトレーナーカードに検索することができます。そのカードを相手に見せて、それを手に入れてください。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "隠された力",
			},
			damage: 10,
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
