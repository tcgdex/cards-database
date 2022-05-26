import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Lilligant V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			en: "Dance Gracefully",
			fr: "Danse Gracieuse",
			es: "Baila con Gracia",
			it: "Danza Elegante",
			pt: "Dança Graciosa",
			de: "Graziöser Tanz"
		},

		effect: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu'à en avoir 6 en main.",
			es: "Roba cartas hasta que tengas 6 cartas en tu mano.",
			it: "Pesca fino ad avere sei carte in mano.",
			pt: "Compre cartas até ter 6 cartas na sua mão.",
			de: "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			de: "Blattschritt"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card