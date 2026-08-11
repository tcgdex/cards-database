import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'de-de': "Darkrai"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Reach Over",
				'fr-fr': "Bras tendu",
				'de-de': "Hinüberlehnen"
			},
			effect: {
				'en-us': "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Darkness Pursuit",
				'fr-fr': "Poursuite obscure",
				'de-de': "Finstere Jagd"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Cresselia, this attack's base damage is 100.",
				'fr-fr': "Si le Pokémon Défenseur est Cresselia, les dégâts de base de cette attaque sont de 100.",
				'de-de': "Wenn das Verteidigende Pokémon Cresselia ist, beträgt der Grundschaden dieses Angriffs 100 Schadenspunkte."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
	},

	thirdParty: {
		cardmarket: 277905,
		tcgplayer: 84698
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
