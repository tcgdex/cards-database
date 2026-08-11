import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Claw Fossil Anorith",
		'fr-fr': "Fossile Griffe Anorith",
		'es-es': "Fósil Garra Anorith",
		'it-it': "Fossilunghia di Anorith",
		'pt-br': "Fóssil Garra de Anorith",
		'de-de': "Anoriths Klauenfossil"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Anorith que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the bottom 7 cards of your deck. You may reveal an Anorith you find there and put it onto your Bench. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 últimas cartas de tu baraja. Puedes enseñar 1 Anorith que encuentres entre ellas y ponerlo en tu Banca. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le ultime sette carte del tuo mazzo. Puoi mostrare un Anorith presente tra quelle carte e metterlo nella tua panchina. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os 7 cards debaixo do seu baralho. Você poderá revelar um Anorith que encontrar lá e colocá-lo no seu Banco. Embaralhe os demais cards de volta no seu baralho.",
		'de-de': "Schau dir die untersten 7 Karten deines Decks an. Falls du dort ein Anorith findest, kannst du es deinem Gegner zeigen und auf deine Bank legen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 291549,
		tcgplayer: 121224
	}
}

export default card
