import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [349],
	set: Set,

	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ascension",
			'fr-fr': "Ascension",
			'es-es': "Ascensión",
			'it-it': "Ascensione",
			'pt-br': "Ascensão",
			'de-de': "Aufstieg"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Splash",
			'fr-fr': "Trempette",
			'es-es': "Salpicadura",
			'it-it': "Splash",
			'pt-br': "Borrifada",
			'de-de': "Platscher"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Although unattractive and unpopular, this Pokémon's marvelous vitality has made it a subject of research.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682081,
				tcgplayer: 451674
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682081,
				tcgplayer: 451674
			}
		},
	],
}

export default card
