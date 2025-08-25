import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Big Storm",
			fr: "Forte Tempête",
			es: "Gran Tempestad",
			it: "Fortempesta",
			pt: "Tempestade Enorme",
			de: "Großer Sturm"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta 1 Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Descarte um Estádio em jogo.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "toi8",

	thirdParty: {
		cardmarket: 769293
	}
}

export default card