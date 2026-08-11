import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		707,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Key of Secrets",
				'fr-fr': "Clé des Secrets",
				'es-es': "Llave de Secretos",
				'it-it': "Chiave dei Segreti",
				'pt-br': "Chave de Segredos",
				'de-de': "Schlüssel der Geheimnisse"
			},
			effect: {
				'en-us': "Each of your Metal Pokémon’s Resistance is now -40.",
				'fr-fr': "La Résistance de chacun de vos Pokémon Metal est maintenant -40.",
				'es-es': "La Resistencia de cada uno de tus Pokémon Metal pasa a ser -40.",
				'it-it': "La resistenza di ciascuno dei tuoi Pokémon Metal è -40.",
				'pt-br': "A Resistência de cada um dos seus Pokémon Metal agora é - 40.",
				'de-de': "Die Resistenz jedes deiner Metal-Pokémon ist jetzt -40."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		'en-us': "It never lets go of a key that it likes, so people give it the keys to vaults and safes as a way to prevent crime.",
	},

	thirdParty: {
		cardmarket: 369039,
		tcgplayer: 183894
	}
}

export default card
