import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [551],
	set: Set,

	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'de-de': "Ganovil",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'es-es': "Sandile",
		'es-mx': "Sandile"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Tighten Up",
			'fr-fr': "Resserrage",
			'de-de': "Zudrücken",
			'it-it': "Torchio",
			'pt-br': "Espremer",
			'es-es': "Apretar",
			'es-mx': "Coerción"
		},

		effect: {
			'en-us': "Your opponent discards a card from their hand.",
			'fr-fr': "Votre adversaire défausse une carte de sa main.",
			'de-de': "Dein Gegner legt 1 Karte aus seiner Hand auf seinen Ablagestapel.",
			'it-it': "Il tuo avversario scarta una carta che ha in mano.",
			'pt-br': "Seu oponente descarta uma carta da mão dele.",
			'es-es': "Tu rival descarta 1 carta de su mano.",
			'es-mx': "Tu rival descarta 1 carta de su mano."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836023,
				tcgplayer: 642509
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836023,
				tcgplayer: 642509
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836403,
				tcgplayer: 642751
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836404,
				tcgplayer: 642678
			}
		}
	]
}

export default card
