import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Floatify",
			fr: "Flottifier",
			es: "Flotación",
			it: "Galleggiamento",
			pt: "Flutualizador",
			de: "Floaten"
		},

		effect: {
			en: "Put up to 2 Item cards from your discard pile into your hand.",
			fr: "Ajoutez jusqu'à 2 cartes Objet de votre pile de défausse à votre main.",
			es: "Pon hasta 2 cartas de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Item da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Itemkarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			pt: "Revólver d'Água",
			de: "Aquaknarre"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card