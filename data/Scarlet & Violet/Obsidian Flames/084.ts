import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [176],
	set: Set,

	name: {
		fr: "Togetic",
		en: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Paix Partagée",
			en: "Shared Peace",
			es: "Paz Compartida",
			it: "Pace Condivisa",
			pt: "Paz Compartilhada",
			de: "Geteilter Frieden"
		},

		effect: {
			fr: "Chaque joueur pioche 3 cartes.",
			en: "Each player draws 3 cards.",
			es: "Cada jugador roba 3 cartas.",
			it: "Ciascun giocatore pesca tre carte.",
			pt: "Cada jogador compra 3 cartas.",
			de: "Jeder Spieler zieht 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Plongée Rapide",
			en: "Speed Dive",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			de: "Tempohechtsprung"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		it: "Togepi",
		pt: "Togepi",
		de: "Togepi"
	}
}

export default card