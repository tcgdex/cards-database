import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Dome Fossil Kabuto",
		'fr-fr': "Fossile Dôme Kabuto",
		'es-es': "Fósil Domo Kabuto",
		'it-it': "Domofossile di Kabuto",
		'pt-br': "Fóssil Cúpula de Kabuto",
		'de-de': "Kabutos Domfossil"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Kabuto que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		'en-us': "Look at the bottom 7 cards of your deck. You may reveal a Kabuto you find there and put it onto your Bench. Shuffle the other cards back into your deck.",
		'es-es': "Mira las 7 últimas cartas de tu baraja. Puedes enseñar 1 Kabuto que encuentres entre ellas y ponerlo en tu Banca. Pon el resto de cartas de nuevo en tu baraja y barájalas todas.",
		'it-it': "Guarda le ultime sette carte del tuo mazzo. Puoi mostrare un Kabuto presente tra quelle carte e metterlo nella tua panchina. Poi rimischia le altre carte nel tuo mazzo.",
		'pt-br': "Olhe os 7 cards debaixo do seu baralho. Você poderá revelar um Kabuto que encontrar lá e colocá-lo em seu Banco. Embaralhe os demais cards de volta.",
		'de-de': "Schau dir die untersten 7 Karten deines Decks an. Falls du dort ein Kabuto findest, kannst du es deinem Gegner zeigen und auf deine Bank legen. Mische die anderen Karten zurück in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289916,
		tcgplayer: 117868
	}
}

export default card
