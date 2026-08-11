import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Regice ex",
		'fr-fr': "Regice ex",
		'de-de': "Regice ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [378],

	hp: 90,

	stage: "Basic",
	types: [
		"Water"
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crystal Body",
				'fr-fr': "Corps de cristal",
				'de-de': "Crystal Body"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, except damage, done to Regice ex by the Attacking Pokémon.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Regice ex par le Pokémon Attaquant.",
				'de-de': "Prevent all effects of attacks, except damage, done to regice ex by the Attacking Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Freeze Lock",
				'fr-fr': "Verrou-gel",
				'de-de': "Freeze Lock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokémon during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas attacher de cartes Énergie de sa main au Pokémon Défenseur lors de son prochain tour.",
				'de-de': "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokémon during this or her next turn."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 88659,
				cardmarket: 276171
			}
		},
	]
}

export default card
