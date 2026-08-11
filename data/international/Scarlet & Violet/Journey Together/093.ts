import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axoloto de Paldea",
		'es-es': "Wooper de Paldea",
		'de-de': "Paldea-Felino",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'es-mx': "Wooper de Paldea"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Trip Over",
			'fr-fr': "Croche-Pied",
			'es-es': "Tropezón",
			'de-de': "Stolperer",
			'it-it': "Inciampare",
			'pt-br': "Tropeção",
			'es-mx': "Tropiezo"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Lee HyunJung",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817245,
				tcgplayer: 623520
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817245,
				tcgplayer: 623520
			}
		},
	],
}

export default card
