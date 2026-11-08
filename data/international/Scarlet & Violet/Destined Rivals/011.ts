import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [557],
	set: Set,

	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'de-de': "Lithomith",
		'it-it': "Dwebble",
		'es-es': "Dwebble",
		'pt-br': "Dwebble",
		'es-mx': "Dwebble"
	},

	illustrator: "Kanami Ogata",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ascension",
			'fr-fr': "Ascension",
			'de-de': "Aufstieg",
			'it-it': "Ascensione",
			'es-es': "Ascensión",
			'pt-br': "Ascensão",
			'es-mx': "Ascensión"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825885,
				tcgplayer: 632837
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825885,
				tcgplayer: 632837
			}
		},
	],
}

export default card
