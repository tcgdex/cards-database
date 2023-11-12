import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Carabaffe",
		en: "Wartortle",
		es: "Wartortle",
		it: "Wartortle",
		pt: "Wartortle",
		de: "Schillok"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Plongée en Apnée",
			en: "Free Diving",
			es: "Buceo Libre",
			it: "Tuffo Libero",
			pt: "Mergulho Livre",
			de: "Freitauchen"
		},

		effect: {
			fr: "Ajoutez jusqu'à 3 cartes Énergie Water de base de votre pile de défausse à votre main.",
			en: "Put up to 3 Basic Water Energy cards from your discard pile into your hand.",
			es: "Pon hasta 3 cartas de Energía Water Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a tre carte Energia base Water dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 3 cartas de Energia Water Básica da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 3 Basis-Water-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			fr: "Attaque Tournante",
			en: "Spinning Attack",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card