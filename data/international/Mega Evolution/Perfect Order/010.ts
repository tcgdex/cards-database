import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [722],

	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'es-mx': "Rowlet",
		'de-de': "Bauz",
		'it-it': "Rowlet",
		'pt-br': "Rowlet"
	},

	illustrator: "Atsuya Uki",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'es-mx': "Encontrar un Amigo",
			'de-de': "Freunde finden",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 Pokémon, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'es-mx': "Tacleada",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684367,
				cardmarket: 877422
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684367,
				cardmarket: 877422
			}
		}
	],

}

export default card
