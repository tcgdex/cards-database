import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [424],
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre",
		es: "Ambipom",
		it: "Ambipom",
		pt: "Ambipom",
		de: "Ambidiffel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Coleta",
			de: "Sammeln"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hand Fling",
			fr: "Catapu-Main",
			es: "Golpe de Mano",
			it: "Manofionda",
			pt: "Arremesso de Mão",
			de: "Handwurf"
		},

		effect: {
			en: "This attack does 20 damage for each card in your hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans votre main.",
			es: "Este ataque hace 20 puntos de daño por cada carta en tu mano.",
			it: "Questo attacco infligge 20 danni per ogni carta che hai in mano.",
			pt: "Este ataque causa 20 pontos de dano para cada carta na sua mão.",
			de: "Diese Attacke fügt für jede Karte auf deiner Hand 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Hitoshi Ariga",

	thirdParty: {
		cardmarket: 740685
	}
}

export default card