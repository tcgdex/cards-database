import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [249],

	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'es-es': "Lugia",
		'it-it': "Lugia",
		'pt-br': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Loop",
				'fr-fr': "Boucle d'Énergie",
				'es-es': "Bucle de Energía",
				'it-it': "Circuito Energetico",
				'pt-br': "Loop de Energia",
				'de-de': "Energieschleife"
			},
			effect: {
				'en-us': "Put an Energy attached to this Pokémon into your hand.",
				'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
				'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
				'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
				'pt-br': "Coloque 1 Energia ligada a este Pokémon na sua mão.",
				'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483579,
				tcgplayer: 219340
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483579,
				tcgplayer: 219340
			}
		},
	],
}

export default card
