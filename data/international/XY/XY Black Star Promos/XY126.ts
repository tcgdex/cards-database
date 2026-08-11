import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mew EX",
		'fr-fr': "Mew-EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Versatile",
				'fr-fr': "Polyvalent"
			},
			effect: {
				'en-us': "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Ce Pokémon peut utiliser les attaques de n'importe quel Pokémon en jeu (les vôtres et ceux de votre adversaire). (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Replace",
				'fr-fr': "Repositionnement"
			},
			effect: {
				'en-us': "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293005
	}
}

export default card
