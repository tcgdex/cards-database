import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Aerodactyl",
		de: "Aerodactyl"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],
	
	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Old Amber",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Unearth",
				de: "Aufstöbern"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Helix Fossil, Dome Fossil, or Old Amber, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Aerodactyl is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Helixfossil-, Domfossil- oder Altbernstein-Karte durchsuchen, sie deinem Gegner zeigen und auf die Hand nehmen. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Aerodactyl von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
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

	thirdParty: {
		cardmarket: 278885,
		tcgplayer: 83470
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
