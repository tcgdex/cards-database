import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'es-es': "Groudon",
		'it-it': "Groudon",
		'pt-br': "Groudon",
		'de-de': "Groudon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drought",
				'fr-fr': "Sécheresse",
				'es-es': "Sequía",
				'it-it': "Siccità",
				'pt-br': "Seca",
				'de-de': "Dürre"
			},
			effect: {
				'en-us': "Attach up to 2 Fighting Energy cards from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez jusqu’à 2 cartes Énergie Fighting de votre main à l’un de vos Pokémon.",
				'es-es': "Une hasta 2 cartas de Energía Fighting de tu mano a 1 de tus Pokémon.",
				'it-it': "Assegna fino a due carte Energia Fighting dalla tua mano a uno dei tuoi Pokémon.",
				'pt-br': "Ligue até 2 cartas de Energia Fighting da sua mão a 1 dos seus Pokémon.",
				'de-de': "Lege bis zu 2 Fighting-Energiekarten aus deiner Hand an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Trembling Ground",
				'fr-fr': "Terrain Tremblant",
				'es-es': "Suelo Temblor",
				'it-it': "Terra Tremante",
				'pt-br': "Abalo Sísmico",
				'de-de': "Erschütterung"
			},
			effect: {
				'en-us': "This Pokémon can’t use Trembling Ground during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Terrain Tremblant pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Suelo Temblor durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Terra Tremante.",
				'pt-br': "Este Pokémon não poderá usar Abalo Sísmico durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Erschütterung während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Said to have expanded the lands by evaporating water with raging heat. It battled titanically with Kyogre.",
	},

	thirdParty: {
		cardmarket: 408214,
		tcgplayer: 201145
	}
}

export default card
