import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Junk Arm",
		fr: "Bras indésirable",
		de: "Müllgreifer"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 cartes de votre main. Cherchez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire et ajoutez-la à votre main. Vous ne pouvez pas associer Bras indésirable aux effets de cette carte.",
		en: "Discard 2 cards from your hand. Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand. You can’t choose Junk Arm with the effect of this card.",
		de: "Lege 2 Karten von deiner Hand auf deinen Ablagestapel. Durchsuche deinen Ablagestapel nach 1 Trainer-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Du kannst mit diesem Effekt keine Müllgreifer-Karte wählen."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279617
	}
}

export default card
