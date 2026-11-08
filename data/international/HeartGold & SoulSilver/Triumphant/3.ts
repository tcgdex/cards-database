import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [251],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
				'de-de': "Seher"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus d’un deck (le vôtre ou celui de votre adversaire) et replacez-les au-dessus du même deck dans n’importe quel ordre.",
				'de-de': "Schau dir die obersten 5 Karten eines Decks an und lege sie danach in beliebiger Reihenfolge wieder auf das Deck des Spielers zurück."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Bind",
				'fr-fr': "Lassofeuille",
				'de-de': "Blattklammer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84147,
				cardmarket: 279533
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279533,
				tcgplayer: 84147
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 276387,
			}
		},
	],

}

export default card
