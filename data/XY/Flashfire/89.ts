import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Fiery Torch",
		fr: "Flambeau Incandescent",
		es: "Antorcha Ardiente",
		it: "Torciardente",
		pt: "Tocha Ardente",
		de: "Feurige Fackel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte Énergie Fire de votre main. (Si vous ne pouvez pas défausser une carte Énergie Fire, vous ne pouvez pas jouer cette carte.) Piochez 2 cartes.",
		en: "Discard a Fire Energy card from your hand. (If you can't discard a Fire Energy card, you can't play this card.) Draw 2 cards.",
		es: "Descarta 1 carta de Energía Fire de tu mano. (Si no puedes descartar 1 carta de Energía Fire, no puedes jugar esta carta). Roba 2 cartas.",
		it: "Scarta una carta Energia Fire presente tra le carte che hai in mano (se non puoi scartare una carta Energia Fire, non puoi giocare questa carta). Pesca due carte.",
		pt: "Descarte um card de Energia Fire de sua mão. (Se você não puder descartar um card de Energia Fire, não poderá jogar esse card.) Compre 2 cards.",
		de: "Lege 1 Fire-Energiekarte von deiner Hand auf deinen Ablagestapel. (Wenn du keine Fire-Energiekarte auf deinen Ablagestapel legen kannst, kannst du diese Karte nicht spielen.) Ziehe 2 Karten."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281572,
		tcgplayer: 91226
	}
}

export default card
