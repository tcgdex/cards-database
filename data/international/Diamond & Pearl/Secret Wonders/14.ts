import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Silver Wing",
				'fr-fr': "Battement argenté",
				'de-de': "Silberschwinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Défenseur et replacez-la dans la main de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wähle 1 am Verteidigenden Pokémon angelegte Energiekarte. Dein Gegner nimmt die gewählte Energiekarte auf die Hand."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Destruction",
				'fr-fr': "Destruction psy",
				'de-de': "Psycho-Zerstörung"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, this attack's base damage is 40 instead of 120.",
				'fr-fr': "Si le Pokémon Défenseur possède des cartes Énergie, les dégâts de base de cette attaque sont de 40 au lieu de 120.",
				'de-de': "Wenn am Verteidigenden Pokémon mindestens 1 Energiekarte angelegt ist, beträgt der Grundschaden dieses Angriffs 40 Schadenspunkte anselle von 120 Schadenspunkten."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It sleeps in a deep-sea trench. If it flaps its wings, it is said to cause a 40-day storm.",
	},

	thirdParty: {
		cardmarket: 277767,
		tcgplayer: 86908
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
