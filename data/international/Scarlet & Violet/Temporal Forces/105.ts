import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [261],
	set: Set,

	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Gnaw Off",
			'fr-fr': "Rongement",
			'es-es': "Roer Completamente",
			'it-it': "Rosicchia Via",
			'pt-br': "Corroer",
			'de-de': "Abnagen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "A Pokémon with a persistent nature, it chases its chosen prey until the prey becomes exhausted.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760735,
				tcgplayer: 542849
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760735,
				tcgplayer: 542849
			}
		},
	],

	illustrator: "Miki Tanaka",

}

export default card