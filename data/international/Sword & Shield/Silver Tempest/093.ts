import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo",
			'de-de': "Freunde finden"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fighting"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It moves while spinning around on its single foot. Some Baltoy have been seen spinning on their heads.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682140,
				tcgplayer: 451747
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682140,
				tcgplayer: 451747
			}
		},
	],
}

export default card
