import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Perrserker V",
		fr: "Berserkatt de Galar V",
		es: "Perrserker de Galar V",
		it: "Perrserker di Galar V",
		pt: "Perrserker de Galar V",
		de: "Galar-Mauzinger V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Feelin' Fine",
			fr: "Mode Cool",
			es: "Buen Rollito",
			it: "Tuttobene",
			pt: "Sensação Boa",
			de: "Wohl fühlen"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			es: "Roba 3 cartas.",
			it: "Pesca tre carte.",
			pt: "Compre 3 cartas.",
			de: "Ziehe 3 Karten."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Treasure Rush",
			fr: "Ruée au Trésor",
			es: "Embestida Tesoro",
			it: "Sfrecciatesoro",
			pt: "Corrida ao Tesouro",
			de: "Schatzhatz"
		},

		effect: {
			en: "This attack does 20 damage for each card in your hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans votre main.",
			es: "Este ataque hace 20 puntos de daño por cada carta en tu mano.",
			it: "Questo attacco infligge 20 danni per ogni carta nella tua mano.",
			pt: "Este ataque causa 20 pontos de dano para cada carta na sua mão.",
			de: "Diese Attacke fügt für jede Karte auf deiner Hand 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card