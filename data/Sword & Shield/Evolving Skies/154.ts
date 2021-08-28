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
		en: "Rescue Carrier",
		fr: "Valise de Secours",
		es: "Carrito de Rescate",
		it: "Trolley di Salvataggio",
		pt: "Rescue Carrier",
		de: "Rettungsbox"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Put up to 2 Pokémon, each with 90 HP or less, from your discard pile into your hand.",
		fr: "Ajoutez jusqu’à 2 Pokémon, avec chacun 90 PV ou moins, de votre pile de défausse à votre main.",
		es: "Pon hasta 2 Pokémon, cada uno con 90 PS o menos, de tu pila de descartes en tu mano.",
		it: "Prendi fino a due Pokémon, ciascuno con 90 PS o meno, dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		pt: "Put up to 2 Pokémon, each with 90 HP or less, from your discard pile into your hand.",
		de: "Nimm bis zu 2 Pokémon, jedes mit 90 oder weniger KP, aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	illustrator: "Ryo Ueda"
}

export default card