import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [628],
	set: Set,

	name: {
		'en-us': "Braviary",
		'fr-fr': "Gueriaigle",
		'de-de': "Washakwil",
		'it-it': "Braviary",
		'pt-br': "Braviary",
		'es-es': "Braviary",
		'es-mx': "Braviary"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'de-de': "Geronimatz",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'es-es': "Rufflet",
		'es-mx': "Rufflet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Aerial Ace",
			'fr-fr': "Aéropique",
			'de-de': "Aero-Ass",
			'it-it': "Aeroassalto",
			'pt-br': "Ás dos Ares",
			'es-es': "Golpe Aéreo",
			'es-mx': "As Aéreo"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más."
		},

		damage: "40+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Speed Wing",
			'fr-fr': "Ailes Vives",
			'de-de': "Turboschwinge",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade",
			'es-es': "Ala Veloz",
			'es-mx': "Ala Veloz"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836065,
				tcgplayer: 642192
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836065,
				tcgplayer: 642192
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836468,
				tcgplayer: 642432
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836469,
				tcgplayer: 642360
			}
		}
	]
}

export default card
