import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Illumise",
		'fr-fr': "Lumivole",
		'de-de': "Illumise"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		314,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Scent Conduct",
				'fr-fr': "Conducteur de parfum",
				'de-de': "Duftruf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Grass Basic Pokémon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Illumise is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck un Pokémon de base Grass et placez-le sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Lumivole est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach 1 -Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Illumise von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Firefly Scent",
				'fr-fr': "Parfum de luciole",
				'de-de': "Leuchtkäferduft"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Poké-Bodies, that Pokémon is now Asleep.",
				'fr-fr': "Si le Pokémon Défenseur possède des Poké-Bodies, il est maintenant Endormi.",
				'de-de': "Wenn das Verteidigende Pokémon mindestens 1 Poké-Body hat, schläft es jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With its sweet aroma, it guides VOLBEAT to draw signs with light in the night sky.",
	},

	thirdParty: {
		cardmarket: 277973,
		tcgplayer: 86267
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
