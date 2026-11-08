import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Lapras V",
		'fr-fr': "Lokhlass V",
		'es-es': "Lapras V",
		'it-it': "Lapras V",
		'pt-br': "Lapras V",
		'de-de': "Lapras V"
	},

	illustrator: "Hasuno",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 210,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Body Surf",
				'fr-fr': "Body Surf",
				'es-es': "Surfeo Corporal",
				'it-it': "Surf Libero",
				'pt-br': "Pegar Jacaré",
				'de-de': "Bodysurfen"
			},
			effect: {
				'en-us': "Attach a Water Energy card from your hand to this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Water de votre main à ce Pokémon. Dans ce cas, échangez-le contre l'un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Water de tu mano a este Pokémon. Si lo haces, cámbialo por 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a questo Pokémon una carta Energia Water dalla tua mano. Se lo fai, scambialo con uno della tua panchina.",
				'pt-br': "Ligue 1 carta de Energia Water da sua mão a este Pokémon. Se fizer isto, troque-o por 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Water-Energiekarte aus deiner Hand an dieses Pokémon an. Wenn du das machst, tausche es gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ocean Loop",
				'fr-fr': "Boucle Océanique",
				'es-es': "Bucle Oceánico",
				'it-it': "Circuito Oceanico",
				'pt-br': "Loop Oceânico",
				'de-de': "Meereskreislauf"
			},
			effect: {
				'en-us': "Put 2 Water Energy attached to this Pokémon into your hand.",
				'fr-fr': "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
				'es-es': "Pon 2 Energías Water unidas a este Pokémon en tu mano.",
				'it-it': "Prendi due Energie Water assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 cartas de Energia Water ligadas a este Pokémon na sua mão.",
				'de-de': "Nimm 2 an dieses Pokémon angelegte Water-Energien auf deine Hand."
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	suffix: "V",

	thirdParty: {
		cardmarket: 436399,
		tcgplayer: 208348
	}
}

export default card
