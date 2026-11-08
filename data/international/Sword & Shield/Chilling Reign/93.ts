import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [891],
	set: Set,

	name: {
		'en-us': "Kubfu",
		'fr-fr': "Wushours",
		'es-es': "Kubfu",
		'it-it': "Kubfu",
		'pt-br': "Kubfu",
		'de-de': "Dakuma"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Training",
			'fr-fr': "Entraînement",
			'es-es': "Entrenamiento",
			'it-it': "Allenamento",
			'pt-br': "Treinamento",
			'de-de': "Training"
		},

		effect: {
			'en-us': "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Elbow Strike",
			'fr-fr': "Coup de Coude",
			'es-es': "Codazo",
			'it-it': "Colpogomito",
			'pt-br': "Golpe de Cotovelo",
			'de-de': "Ellbogenstoß"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "If Kubfu pulls the long white hair on its head, its fighting spirit heightens and power wells up from the depths of its belly."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567201,
				tcgplayer: 241762
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567201,
				tcgplayer: 241762
			}
		},
	],
}

export default card
