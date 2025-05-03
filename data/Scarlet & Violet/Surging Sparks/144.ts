import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			es: "Robo Pico",
			it: "Battipesca",
			pt: "Comprada Espinhosa",
			de: "Stachelzug"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			pt: "Megassoco",
			de: "Megahieb"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
