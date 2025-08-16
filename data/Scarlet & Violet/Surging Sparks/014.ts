import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [954],
	set: Set,

	name: {
		en: "Rabsca",
		fr: "Bérasca",
		es: "Rabsca",
		it: "Rabsca",
		pt: "Rabsca",
		de: "Skarabaks"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Triple Draw",
			fr: "Triple Pioche",
			es: "Triple Robo",
			it: "Pescata Tripla",
			pt: "Compra Tripla",
			de: "Dreifachzug"
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
		cost: ["Grass"],

		name: {
			en: "Counterturn",
			fr: "Contre-Tour",
			es: "Giro Inesperado",
			it: "Controsvolta",
			pt: "Reviravolta",
			de: "Gegenzug"
		},

		effect: {
			en: "If there are 3 or fewer cards in your deck, this attack does 200 more damage.",
			fr: "S'il y a 3 cartes ou moins dans votre deck, cette attaque inflige 200 dégâts supplémentaires.",
			es: "Si hay 3 cartas o menos en tu baraja, este ataque hace 200 puntos de daño más.",
			it: "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 200 danni in più.",
			pt: "Se houver 3 ou menos cartas no seu baralho, este ataque causará 200 pontos de dano a mais.",
			de: "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 200 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Masako Tomii"
}

export default card
