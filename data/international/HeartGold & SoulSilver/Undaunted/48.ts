import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
		'de-de': "Evoli"
	},

	illustrator: "Noriko Hotta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tickle",
				'fr-fr': "Chatouille",
				'de-de': "Spaßkanone"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its irregularly configured DNA is affected by its surroundings. It evolves if its environment changes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279301,
				tcgplayer: 85088
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279301,
				tcgplayer: 85088
			}
		}
	],

}

export default card
