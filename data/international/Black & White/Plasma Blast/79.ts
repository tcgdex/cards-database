import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Cover Fossil",
		'fr-fr': "Fossile Plaque",
		'es-es': "Fósil Tapa",
		'it-it': "Fossiltappo",
		'pt-br': "Fóssil Casca",
		'de-de': "Schildfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Carapagos que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the bottom 7 cards of your deck. You may reveal a Tirtouga you find there and put it onto your Bench. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 últimas cartas de tu baraja. Puedes enseñar a un Tirtouga que encuentres entre ellas y ponerlo en tu Banca. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le ultime sette carte del tuo mazzo. Puoi mostrare un Tirtouga che hai trovato e metterlo nella tua panchina. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os últimos 7 cards da base de seu baralho. Você pode revelar um Tirtouga encontrado ali e colocá-lo em seu Banco. Embaralhe os outros cards de volta em seu baralho.",
		'de-de': "Schau dir die untersten 7 Karten deines Decks an. Falls du dort ein Galapaflos findest, kannst du es deinem Gegner zeigen und auf deine Bank legen. Mische die anderen Karten anschließend in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281100,
		tcgplayer: 84450
	}
}

export default card
