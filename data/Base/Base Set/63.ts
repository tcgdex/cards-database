import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Withdraw",
				fr: "Repli"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carapuce pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume."
	}
}

export default card
