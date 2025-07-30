import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Wooloo",
		fr: "Moumouton",
		es: "Wooloo",
		it: "Wooloo",
		pt: "Wooloo",
		de: "Wolly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Knock Over",
			fr: "Culbute",
			es: "Tumbar",
			it: "Sconvolgimento",
			pt: "Arrebatar",
			de: "Umwerfen"
		},

		effect: {
			en: "You may discard a Stadium in play.",
			fr: "Vous pouvez défausser un Stade en jeu.",
			es: "Puedes descartar 1 Estadio en juego.",
			it: "Puoi scartare una carta Stadio in gioco.",
			pt: "Você pode descartar um Estádio em jogo.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Wintr Wandr",

	thirdParty: {
		cardmarket: 785978
	}
}

export default card
