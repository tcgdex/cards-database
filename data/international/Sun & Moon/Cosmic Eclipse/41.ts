import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Energy Loop",
				'fr-fr': "Boucle d’Énergie",
				'es-es': "Bucle de Energía",
				'it-it': "Circuito Energetico",
				'pt-br': "Loop de Energia",
				'de-de': "Energieschleife"
			},
			effect: {
				'en-us': "Put an Energy attached to this Pokémon into your hand.",
				'fr-fr': "Placez une Énergie attachée à ce Pokémon dans votre main.",
				'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
				'it-it': "Prendi un’Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
				'pt-br': "Coloque 1 Energia ligada a este Pokémon na sua mão.",
				'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even fast-swimming fish Pokémon can be disabled by Golduck. It brings them to a standstill and seizes them.",
	},

	thirdParty: {
		cardmarket: 407854,
		tcgplayer: 201217
	}
}

export default card
