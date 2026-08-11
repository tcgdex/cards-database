import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [720],
	set: Set,

	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa",
		'de-de': "Hoopa"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Hand of Djinn",
			'fr-fr': "Main du Djinn",
			'es-es': "Mano del Genio Burlón",
			'it-it': "Mano del Genio",
			'pt-br': "Mão de Gênio",
			'de-de': "Hand des Plagegeists"
		},

		effect: {
			'en-us': "Search your deck for a Darkness Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie Darkness, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Darkness y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Darkness e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia Darkness no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Darkness-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Tyrannical Hole",
			'fr-fr': "Trou Tyrannique",
			'es-es': "Agujero Tiránico",
			'it-it': "Voragine Tirannica",
			'pt-br': "Buraco de Tirano",
			'de-de': "Despotischer Schlund"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674135,
				tcgplayer: 284030
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674135,
				tcgplayer: 284030
			}
		},
	],
}

export default card
