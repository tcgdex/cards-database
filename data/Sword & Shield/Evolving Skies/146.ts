import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Dream Ball",
		fr: "Rêve Ball",
		es: "Ensueño Ball",
		it: "Dream Ball",
		pt: "Bola Onírica",
		de: "Traumball"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "You can play this card only if you took it as a face-down Prize card, before you put it into your hand.\nSearch your deck for a Pokémon and put it onto your Bench. Then, shuffle your deck.",
		fr: "Vous ne pouvez jouer cette carte que si vous l'avez obtenue en récupérant une carte Récompense face cachée, et avant de l'ajouter à votre main.\nCherchez dans votre deck un Pokémon, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
		es: "Puedes jugar esta carta solo si la has cogido de entre las cartas de Premio que están boca abajo, antes de ponerla en tu mano.\nBusca en tu baraja 1 Pokémon y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
		it: "Puoi giocare questa carta solo se l'hai presa come carta Premio coperta, prima di aggiungerla alle carte che hai in mano.\nCerca nel tuo mazzo un Pokémon e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		pt: "Você só pode jogar esta carta se a tiver pegado como uma das cartas de Prêmio viradas para baixo, antes de colocá-la na sua mão.\nProcure por 1 Pokémon no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
		de: "Du kannst diese Karte nur spielen, wenn du sie als verdeckte Preiskarte genommen hast und bevor du sie auf deine Hand nimmst.\nDurchsuche dein Deck nach 1 Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	illustrator: "Ryo Ueda",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574204,
		tcgplayer: 246771
	}
}

export default card
