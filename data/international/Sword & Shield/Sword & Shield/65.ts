import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
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
				'en-us': "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Lightning, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Lightning y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Lightning e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia Lightning no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Lightning-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	dexId: [25],

	thirdParty: {
		cardmarket: 436459,
		tcgplayer: 208362
	}
}

export default card
