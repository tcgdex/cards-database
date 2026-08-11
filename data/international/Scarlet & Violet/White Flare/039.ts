import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'de-de': "Makabaja",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'es-es': "Yamask",
		'es-mx': "Yamask"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Focused Wish",
			'fr-fr': "Vœu Fervent",
			'de-de': "Gezielter Wunsch",
			'it-it': "Intensiderio",
			'pt-br': "Desejo Direcionado",
			'es-es': "Intenso Deseo",
			'es-mx': "Deseo Enfocado"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "20+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835974,
				tcgplayer: 642151
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835974,
				tcgplayer: 642151
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836563,
				tcgplayer: 642394
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836564,
				tcgplayer: 642322
			}
		},
	],
}

export default card
