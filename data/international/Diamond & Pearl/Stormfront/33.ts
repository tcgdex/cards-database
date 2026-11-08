import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Budew",
		'fr-fr': "Rozbouton",
		'de-de': "Knospi"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		406,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'fr-fr': "Rozbouton",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Enzyme",
				'fr-fr': "Enzyme empoisonné",
				'de-de': "Giftenzyme"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Budew by your opponent's Poisoned Pokémon.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Rozbouton par les Pokémon Empoisonnés de votre adversaire.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Knospi von vergifteten Pokémon deines Gegners zugefügt würden."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Buddy-buddy",
				'fr-fr': "Copain-copain",
				'de-de': "Dicke Freunde"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278331,
		tcgplayer: 84011
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
