import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Nessa",
		fr: "Donna",
		es: "Cathy",
		it: "Azzurra",
		pt: "Vanessa",
		de: "Kate"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put up to 4 in any combination of Water Pokémon and Water Energy cards from your discard pile into your hand.",
		fr: "Ajoutez à votre main une combinaison d'un maximum de 4 cartes Pokémon Water et Énergie Water de votre pile de défausse.",
		es: "Pon hasta 4 cartas de Pokémon Water y de Energía Water, en cualquier combinación, de tu pila de descartes en tu mano.",
		it: "Prendi fino a quattro Pokémon Water e carte Energia Water in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		pt: "Coloque até 4 cartas de Pokémon Water e de Energia Water da sua pilha de descarte na sua mão em qualquer combinação.",
		de: "Nimm eine beliebige Kombination aus bis zu 4 Water-Pokémon und Water-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 512495
	}
}

export default card
