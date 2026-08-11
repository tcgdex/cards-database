import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Fiery Flint",
		'fr-fr': "Silex Ardent",
		'es-es': "Pedernal Ardiente",
		'it-it': "Pietra Pirica",
		'pt-br': "Sílex-de-fogo",
		'de-de': "Feuerstein"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez jusqu’à 4 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "You can play this card only if you discard 2 other cards from your hand.\n\nSearch your deck for up to 4 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
		'es-es': "Puedes jugar esta carta solo si descartas otras 2 cartas de tu mano. \n\nBusca en tu baraja hasta 4 cartas de Energía Fire, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Puoi giocare questa carta solo se scarti altre due carte che hai in mano.\n\nCerca nel tuo mazzo fino a quattro carte Energia Fire, mostrale e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Você só pode jogar esta carta se descartar outras 2 cartas da sua mão.\n\nProcure por até 4 cartas de Energia Fire no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Du kannst diese Karte nur spielen, wenn du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legst.\n\nDurchsuche dein Deck nach bis zu 4 Fire-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 363531,
		tcgplayer: 175490
	}
}

export default card
