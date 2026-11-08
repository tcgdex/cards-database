import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge",
				'fr-fr': "Chargeur",
				'es-es': "Carga",
				'it-it': "Sottocarica",
				'pt-br': "Carga",
				'de-de': "Ladevorgang"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um card de Energia Lightning e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches.",
	},

	thirdParty: {
		cardmarket: 273590,
		tcgplayer: 95957
	}
}

export default card
