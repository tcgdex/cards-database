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
		en: "Switching Cups",
		fr: "Gobelets d’Échange",
		es: "Cubiletes de Cambio",
		it: "Bicchieri di Scambio",
		pt: "Switching Cups",
		de: "Tauschbecher"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Switch a card from your hand with the top card of your deck.",
		fr: "Échangez une carte de votre main contre la carte du dessus de votre deck.",
		es: "Cambia 1 carta de tu mano por la primera carta de tu baraja.",
		it: "Scambia una carta che hai in mano con la prima carta del tuo mazzo.",
		pt: "Switch a card from your hand with the top card of your deck.",
		de: "Tausche 1 Karte aus deiner Hand gegen die oberste Karte deines Decks aus."
	},

	trainerType: "Item",
	illustrator: "Ryo Ueda"
}

export default card