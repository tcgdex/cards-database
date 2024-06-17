import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Magnetic Catch",
			fr: "Prise Magnétique",
			es: "Captura Magnética",
			it: "Cattura Magnetica",
			pt: "Captura Magnética",
			de: "Magnetfang"
		},

		effect: {
			en: "Shuffle up to 3 Metal Energy cards from your discard pile into your deck.",
			fr: "Mélangez avec votre deck jusqu'à 3 cartes Énergie Metal de votre pile de défausse.",
			es: "Pon hasta 3 cartas de Energía Metal de tu pila de descartes en tu baraja y barájalas todas.",
			it: "Rimischia fino a tre carte Energia Metal dalla tua pila degli scarti nel tuo mazzo.",
			pt: "Embaralhe até 3 cartas de Energia Metal da sua pilha de descarte no seu baralho.",
			de: "Mische bis zu 3 Metal-Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Rolling Attack",
			fr: "Attaque Qui Roule",
			es: "Ataque Giro",
			it: "Attacco Rotolante",
			pt: "Golpe Rolador",
			de: "Rollender Angriff"
		},

		damage: 30
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