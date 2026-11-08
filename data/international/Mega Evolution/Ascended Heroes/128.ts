import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'es-mx': "Poochyena",
		'de-de': "Fiffyen",
		'it-it': "Poochyena",
		'pt-br': "Poochyena"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [261],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Gnaw Off",
			'fr-fr': "Rongement",
			'es-es': "Roer Completamente",
			'es-mx': "Mordisqueo Total",
			'de-de': "Abnagen",
			'it-it': "Rosicchia Via",
			'pt-br': "Corroer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
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
			cardmarket: 869739,
			tcgplayer: 675940
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870338,
			tcgplayer: 676953
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870337,
			tcgplayer: 677093
		}
	},
],
}

export default card
