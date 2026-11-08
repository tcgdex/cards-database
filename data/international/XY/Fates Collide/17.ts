import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
		'es-es': "Omanyte",
		'it-it': "Omanyte",
		'pt-br': "Omanyte",
		'de-de': "Amonitas"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revolver d'Água",
				'de-de': "Aquaknarre"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	evolveFrom: {
		'en-us': "Helix Fossil Omanyte",
		'fr-fr': "Fossile Nautile Amonita",
		'es-es': "Fósil Hélix Omanyte",
		'it-it': "Helixfossile di Omanyte",
		'pt-br': "Fóssil Espiral de Omanyte",
		'de-de': "Helixfossil Amonitas"
	},

	description: {
		'en-us': "Revived from an ancient fossil, this Pokémon uses air stored in its shell to sink and rise in water.",
	},

	thirdParty: {
		cardmarket: 289843,
		tcgplayer: 117779
	}
}

export default card
