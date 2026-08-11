import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Primal Calling",
				'fr-fr': "Appel primitif",
				'de-de': "Urschrei"
			},
			effect: {
				'en-us': "Search your deck for up to 3 Trainer cards that have Fossil in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 3 cartes Dresseur dont le nom comporte Fossile, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Trainerkarten mit Fossil im Namen, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Swirl",
				'fr-fr': "Tourbillon dodo",
				'de-de': "Schlafwirbel"
			},
			effect: {
				'en-us': "Both Relicanth and the Defending Pokémon are now Asleep.",
				'fr-fr': "Relicanth et le Pokémon Défenseur sont maintenant Endormis.",
				'de-de': "Relicanth und das Verteidigende Pokémon schlafen jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A rare Pokémon discovered during a deep-sea exploration. It has not changed in over 100 million years.",
	},

	thirdParty: {
		cardmarket: 277953,
		tcgplayer: 88687
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
