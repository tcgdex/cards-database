import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'fr-fr': "Demanta",
		'de-de': "Mantax"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [226],

	hp: 80,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Group Swim",
				'fr-fr': "Nage de groupe",
				'de-de': "Schwimmgruppe"
			},
			effect: {
				'en-us': "Search your deck for a Water Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon Water dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 -Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aqua Slash",
				'fr-fr': "Aqua-tranche",
				'de-de': "Aquaschlag"
			},
			effect: {
				'en-us': "Mantine can't attack during your next turn.",
				'fr-fr': "Demanta ne peut pas attaquer pendant votre prochain tour.",
				'de-de': "Mantax kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As it majestically swims, it doesn’t care if Remoraid attach to it for scavenging its leftovers."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87184,
				cardmarket: 279017
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87184,
				cardmarket: 279017
			}
		},
	],

}

export default card
