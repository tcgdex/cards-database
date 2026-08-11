import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'de-de': "Aerodactyl"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [142],
	
	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Old Amber"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Unearth",
				'de-de': "Aufstöbern"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for Helix Fossil, Dome Fossil, or Old Amber, show it your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Aerodactyl is affected by a Special Condition.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Helixfossil-, Domfossil- oder Altbernstein-Karte durchsuchen, sie deinem Gegner zeigen und auf die Hand nehmen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Aerodactyl von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83470,
				cardmarket: 278885
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278885,
				tcgplayer: 83470
			}
		},
	],

}

export default card
