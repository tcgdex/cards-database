import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [595],
	set: Set,

	name: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'de-de': "Wattzapf",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'es-es': "Joltik",
		'es-mx': "Joltik"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'de-de': "Überraschungsangriff",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'es-es': "Ataque Sorpresa",
			'es-mx': "Ataque Sorpresa"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836126,
			tcgplayer: 642228
		}
	},
],
}

export default card
