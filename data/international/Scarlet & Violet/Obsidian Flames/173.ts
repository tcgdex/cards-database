import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [531],
	set: Set,

	name: {
		'fr-fr': "Nanméouïe",
		'en-us': "Audino",
		'es-es': "Audino",
		'it-it': "Audino",
		'pt-br': "Audino",
		'de-de': "Ohrdoch"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Trouver un Ami",
			'en-us': "Find a Friend",
			'es-es': "Encontrar un Amigo",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo",
			'de-de': "Freunde finden"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Gifle",
			'en-us': "Slap",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures' feelings and physical conditions.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725253,
				tcgplayer: 509714,
				cardtrader: 256069
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725253,
				tcgplayer: 509714,
				cardtrader: 256069
			}
		},
	],

	illustrator: "Tika Matsuno",

	
}

export default card
