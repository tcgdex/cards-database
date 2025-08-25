import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Dowsing Machine",
		fr: "Cherch’Objet",
		es: "Zahorí",
		it: "Ricerca Strumenti",
		pt: "Máquina de Prospecção",
		de: "Itemradar"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Placez une carte Dresseur de votre pile de défausse dans votre main.",
		en: "Discard 2 cards from your hand. (If you can’t discard 2 cards, you can’t play this card.) Put a Trainer card from your discard pile into your hand.",
		es: "Descarta 2 cartas de tu mano. (Si no puedes descartar 2 cartas, no puedes jugar esta carta.) Pon una carta de Entrenador de tu pila de descartes en tu mano.",
		it: "Scarta due delle carte che hai in mano (se non puoi scartare due carte, non potrai giocare questa carta). Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		pt: "Descarte 2 cards da sua mão. (Se você não puder descartar 2 cards, não poderá jogar esse card.) Coloque um card de Treinador da sua pilha de descarte em sua mão.",
		de: "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. (Wenn du keine 2 Karten auf deinen Ablagestapel legen kannst, kannst du diese Karte nicht spielen.) Nimm 1 Trainerkarte von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280868,
		tcgplayer: 84896
	}
}

export default card
