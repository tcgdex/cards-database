import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [519],
	set: Set,

	name: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'de-de': "Dusselgurr",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'es-es': "Pidove",
		'es-mx': "Pidove"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scout",
			'fr-fr': "Espionnage",
			'de-de': "Späher",
			'it-it': "Esplorazione",
			'pt-br': "Explorador",
			'es-es': "Explorar",
			'es-mx': "Expedición"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire montre sa main.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a mão dele.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'es-mx': "Tu rival muestra las cartas de su mano."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'es-es': "Estampida",
			'es-mx': "Estampida"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836052,
				tcgplayer: 642522
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836052,
				tcgplayer: 642522
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836455,
				tcgplayer: 642763
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836454,
				tcgplayer: 642690
			}
		}
	]
}

export default card
