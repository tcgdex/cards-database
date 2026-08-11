import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Jaw Fossil",
		'fr-fr': "Fossile Mâchoire",
		'es-es': "Fósil Mandíbula",
		'it-it': "Fossilmascella",
		'pt-br': "Fóssil de Mandíbula",
		'de-de': "Kieferfossil"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Ptyranidur que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the bottom 7 cards of your deck. You may reveal a Tyrunt you find there and put it onto your Bench. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 últimas cartas de tu baraja. Puedes enseñar un Tyrunt que encuentres entre ellas y ponerlo en tu Banca. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le ultime sette carte del tuo mazzo. Puoi mostrare un Tyrunt presente tra quelle carte e metterlo nella tua panchina. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os 7 cards de baixo do seu baralho. Você poderá revelar um Tyrunt que encontrar lá e colocá-lo em seu Banco. Embaralhe os demais cards de volta.",
		'de-de': "Schau dir die untersten 7 Karten deines Decks an. Falls du dort ein Balgoras findest, kannst du es deinem Gegner zeigen und auf deine Bank legen. Mische die anderen Karten anschließend in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281758,
		tcgplayer: 92276
	}
}

export default card
