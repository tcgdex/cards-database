import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Kyogre",
		'fr-fr': "Kyogre de Team Aqua",
		'de-de': "Team Aquas Kyogre"
	},

	illustrator: "K. Hoshiba",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [382],

	hp: 100,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Power Saver",
				'fr-fr': "Économisateur de puissance",
				'de-de': "Power Saver"
			},
			effect: {
				'en-us': "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Aqua in its name is 3 or less, Team Aqua's Kyogre can't attack.",
				'fr-fr': "Tant que jusqu'à 3 Pokémon (les vôtres et ceux de votre adversaire) dont les noms comportent Team Aqua sont en jeu, Kyogre de Team Aqua ne peut pas attaquer.",
				'de-de': "As long as the number of Pokémon in play (both yours and your opponent's) that has Team Aqua in its name is 3 or less, Team Aqua's Kyogre can't attack."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Trip",
				'fr-fr': "Aqua croche-pied",
				'de-de': "Aqua Trip"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Smash",
				'fr-fr': "Aqua-choc",
				'de-de': "Aqua Smash"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 89788
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275780,
				tcgplayer: 89788
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125256
			}
		}
	]
}

export default card
