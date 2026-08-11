import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [552],
	set: Set,

	name: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'de-de': "Rokkaiman",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'es-es': "Krokorok",
		'es-mx': "Krokorok"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'de-de': "Ganovil",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'es-es': "Sandile",
		'es-mx': "Sandile"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

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
			'en-us': "Your opponent discards 2 cards from their hand.",
			'fr-fr': "Votre adversaire défausse 2 cartes de sa main.",
			'de-de': "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel.",
			'it-it': "Il tuo avversario scarta due carte che ha in mano.",
			'pt-br': "Seu oponente descarta 2 cartas da mão dele.",
			'es-es': "Tu rival descarta 2 cartas de su mano.",
			'es-mx': "Tu rival descarta 2 cartas de su mano."
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836024,
				tcgplayer: 642510
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836024,
				tcgplayer: 642510
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836408,
				tcgplayer: 642752
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836406,
				tcgplayer: 642679
			}
		}
	]
}

export default card
