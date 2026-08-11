import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Wobbuffet BREAK",
		'fr-fr': "Qulbutoké TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Right Back at You",
				'fr-fr': "Retour de Dégâts",
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon. During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon. Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 291591
	}
}

export default card
