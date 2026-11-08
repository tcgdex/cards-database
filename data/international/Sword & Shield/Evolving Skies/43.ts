import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Kagemaru Himeno",

	attacks: [{
		name: {
			'en-us': "Element Chain",
			'fr-fr': "Chaîne Élémentaire",
			'es-es': "Cadena de Elementos",
			'it-it': "Catena di Elementi",
			'pt-br': "Element Chain",
			'de-de': "Elementkette"
		},

		effect: {
			'en-us': "Look at the top 6 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			'fr-fr': "Regardez les 6 cartes du dessus de votre deck puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			'es-es': "Mira las 6 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			'it-it': "Guarda le prime sei carte del tuo mazzo e assegna un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Poi rimischia le altre carte nel tuo mazzo.",
			'pt-br': "Look at the top 6 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			'de-de': "Schau dir die obersten 6 Karten deines Decks an und lege beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon an. Mische die anderen Karten zurück in dein Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'es-es': "Nieve Helada",
			'it-it': "Geloneve",
			'pt-br': "Icy Snow",
			'de-de': "Eisiger Schnee"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148 degrees Fahrenheit."
	},

	dexId: [615],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574067,
				tcgplayer: 246865
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 740468
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574067,
				tcgplayer: 246865
			}
		},
	],
}

export default card
