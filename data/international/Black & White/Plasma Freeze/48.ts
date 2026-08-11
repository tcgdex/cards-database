import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'es-es': "Espeon",
		'it-it': "Espeon",
		'pt-br': "Espeon",
		'de-de': "Psiana"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psy Alert",
				'fr-fr': "Alerte Psychique",
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shadow Ball",
				'fr-fr': "Ball'Ombre",
			},
			effect: {
				'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 40 dégâts à 1 des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its fur is so sensitive, it can feel minute shifts in the air and predict the weather…and its foes' thoughts.",
	},

	thirdParty: {
		cardmarket: 280926,
		tcgplayer: 85328
	}
}

export default card
