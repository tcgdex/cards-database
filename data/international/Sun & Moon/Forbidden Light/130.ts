import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Diantha",
		'fr-fr': "Dianthéa",
		'es-es': "Dianta",
		'it-it': "Diantha",
		'pt-br': "Diantha",
		'de-de': "Diantha"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon Fairy a été mis K.O. pendant le dernier tour de votre adversaire.\n\nAjoutez 2 cartes de votre pile de défausse à votre main.",
		'en-us': "You can play this card only if 1 of your Fairy Pokémon was Knocked Out during your opponent’s last turn.\n\nPut 2 cards from your discard pile into your hand.",
		'es-es': "Puedes jugar esta carta solo si 1 de tus Pokémon Fairy quedó Fuera de Combate durante el último turno de tu rival.\n\nPon 2 cartas de tu pila de descartes en tu mano.",
		'it-it': "Puoi giocare questa carta solo se uno dei tuoi Pokémon Fairy è stato messo KO durante l’ultimo turno del tuo avversario.\n\nPrendi due carte dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Você só pode jogar esta carta se 1 dos seus Pokémon Fairy tiver sido Nocauteado durante a última vez de jogar do seu oponente.\n\nColoque 2 cartas da sua pilha de descarte na sua mão.",
		'de-de': "Du kannst diese Karte nur spielen, wenn 1 deiner Fairy-Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde.\n\nNimm 2 Karten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 355641,
		tcgplayer: 165769
	}
}

export default card
