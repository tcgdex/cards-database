import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoke"
	},
	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [202],
	hp: 90,
	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Tenacious Bind",
				'fr-fr': "Liaison tenace"
			},
			effect: {
				'en-us': "As long as Wobbuffet is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
				'fr-fr': "Tant que Qulbutoke est votre Pokémon Actif, le Coût de retraite du Pokémon Actif de votre adversaire est augmenté de ."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Trip Over",
				'fr-fr': "Croche-pied"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "To keep its pitch-black tail hidden, it lives quietly in the darkness. It is never first to attack."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275609,
				tcgplayer: 90622
			}
		},
	],

}

export default card
