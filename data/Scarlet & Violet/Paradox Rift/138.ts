import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Orthworm",
		fr: "Ferdeter",
		es: "Orthworm",
		it: "Orthworm",
		pt: "Orthworm",
		de: "Schlurm"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Punch and Draw",
			fr: "Poing et Pioche",
			es: "Puñetazo y Robo",
			it: "Pugnopesca",
			pt: "Socar e Comprar",
			de: "Schlagen und ziehen"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Crunch-Time Rush",
			fr: "Ruée Pressée",
			es: "Golpe de la Verdad",
			it: "Assalto in Extremis",
			pt: "Pressa Apressada",
			de: "Stürmischer Endspurt"
		},

		effect: {
			en: "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
			fr: "S'il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
			es: "Si hay 3 cartas o menos en tu baraja, este ataque hace 150 puntos de daño más.",
			it: "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 150 danni in più.",
			pt: "Se houver 3 ou menos cartas no seu baralho, este ataque causará 150 pontos de dano a mais.",
			de: "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Pani Kobayashi"
}

export default card