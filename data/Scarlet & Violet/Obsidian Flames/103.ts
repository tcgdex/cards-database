import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Taupiqueur",
		en: "Diglett",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Tête Excavatrice",
			en: "Hole-Diggin' Noggin",
			es: "Cabeza Cava-Hoyos",
			it: "Zuccone Scavatore",
			pt: "Cabeça Cavucadora",
			de: "Buddelkopf"
		},

		effect: {
			fr: "Défaussez la carte du dessus de votre deck.",
			en: "Discard the top card of your deck.",
			es: "Descarta la primera carta de tu baraja.",
			it: "Scarta la prima carta del tuo mazzo.",
			pt: "Descarte a carta de cima do seu baralho.",
			de: "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card