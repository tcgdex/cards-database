import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Charizard VMAX",
		'fr-fr': "Dracaufeu VMAX",
		'es-es': "Charizard VMAX",
		'it-it': "Charizard VMAX",
		'pt-br': "Charizard VMAX",
		'de-de': "Glurak VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [6],
	set: Set,
	hp: 330,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charizard V",
		'fr-fr': "Dracaufeu-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch'Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 100,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "G-Max Wildfire",
				'fr-fr': "Fournaise G-Max",
				'es-es': "Gigallamarada",
				'it-it': "Gigavampa",
				'pt-br': "Queimada G-Max",
				'de-de': "Giga-Feuerflug"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie da questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 500225,
		tcgplayer: 223073
	}
}

export default card
