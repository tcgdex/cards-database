import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Poké Kid",
		'fr-fr': "Poké Enfant",
		'es-es': "Pokéchica",
		'it-it': "Poké Bimba",
		'pt-br': "Poké Criança",
		'de-de': "Poké-Kind"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436959
	}
}

export default card
