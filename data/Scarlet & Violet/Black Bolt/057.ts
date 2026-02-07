import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [551],
	set: Set,

	name: {
		en: "Sandile",
		fr: "Mascaïman",
		de: "Ganovil",
		it: "Sandile",
		pt: "Sandile",
		es: "Sandile",
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
			en: "Tighten Up",
			fr: "Resserrage",
			de: "Zudrücken",
			it: "Torchio",
			pt: "Espremer",
			es: "Apretar",
			'es-mx': "Coerción"
		},

		effect: {
			en: "Your opponent discards a card from their hand.",
			fr: "Votre adversaire défausse une carte de sa main.",
			de: "Dein Gegner legt 1 Karte aus seiner Hand auf seinen Ablagestapel.",
			it: "Il tuo avversario scarta una carta che ha in mano.",
			pt: "Seu oponente descarta uma carta da mão dele.",
			es: "Tu rival descarta 1 carta de su mano.",
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
				cardmarket: 836023
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836023
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836403
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836404
			}
		}
	]
}

export default card
