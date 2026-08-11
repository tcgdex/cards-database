import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Plume Fossil",
		'fr-fr': "Fossile Plume",
		'es-es': "Fósil Pluma",
		'it-it': "Fossilpiuma",
		'pt-br': "Fóssil Pluma",
		'de-de': "Federfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Arkéapti que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the bottom 7 cards of your deck. You may reveal an Archen you find there and put it onto your Bench. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 últimas cartas de tu baraja. Puedes enseñar a un Archen que encuentres entre ellas y ponerlo en tu Banca. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le ultime sette carte del tuo mazzo. Puoi mostrare un Archen che hai trovato e aggiungerlo alla tua panchina. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os 7 cards de baixo do seu baralho. Você poderá revelar um Archen que encontrar lá e colocá-lo em seu Banco. Embaralhe os demais cards de volta.",
		'de-de': "Schau dir die untersten 7 Karten deines Decks an. Falls du dort ein Flapteryx findest, kannst du es deinem Gegner zeigen und auf deine Bank legen. Mische die anderen Karten anschließend in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280216,
		tcgplayer: 88159
	}
}

export default card
