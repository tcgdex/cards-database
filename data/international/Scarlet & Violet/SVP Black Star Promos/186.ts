import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'de-de': "Zurrokex",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy"
	},

	illustrator: "OKUBO",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Kick Shot",
			'fr-fr': "Coup d'Ergots",
			'de-de': "Kickschuss",
			'es-es': "Disparo Patada",
			'it-it': "Colpocalcio",
			'pt-br': "Chute Tiro"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 817777,
				tcgplayer: 627707
			},
		}
	],
}

export default card
