import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 60,

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
				'en-us': "Tail Whap",
				'fr-fr': "Queue battoir",
				'de-de': "Schweifvertrimmer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Throw Off",
				'fr-fr': "Se débarrasser",
				'de-de': "Abwerfen"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Before doing damage, discard all Pokémon Tool cards attached to that Pokémon.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Avant d'infliger les dégâts, défaussez toutes les cartes Outil Pokémon attachées à ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Bevor der Schaden zugefügt wird, lege alle Pokémon-Ausrüstungs-Karten, die an dem gewählten Pokémon angelegt sind, auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It uses its tail to pluck fruits that are out of reach. Its tail is more adept than its real hands.",
		'fr-fr': "Il utilise sa queue pour cueillir les fruits inaccessibles. Elle est plus agile que ses mains."
	},

	thirdParty: {
		cardmarket: 277699,
		tcgplayer: 83489
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
