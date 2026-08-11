import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma"
	},

	illustrator: "Dsuke",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Silent Wing",
			'fr-fr': "Aile Silencieuse",
			'de-de': "Lautlose Flügel",
			'es-es': "Ala Silenciosa",
			'it-it': "Ala Silenziosa",
			'pt-br': "Asa Silenciosa"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire montre sa main.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a mão dele."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 817776,
				tcgplayer: 627706
			},
		}
	],
}

export default card
