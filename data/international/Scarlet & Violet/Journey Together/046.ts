import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [76],
	set: Set,

	name: {
		'en-us': "Alolan Golem",
		'fr-fr': "Grolem d'Alola",
		'es-es': "Golem de Alola",
		'de-de': "Alola-Geowaz",
		'it-it': "Golem di Alola",
		'pt-br': "Golem de Alola",
		'es-mx': "Golem de Alola"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d'Alola",
		'es-es': "Graveler de Alola",
		'de-de': "Alola-Georok",
		'it-it': "Graveler di Alola",
		'pt-br': "Graveler de Alola",
		'es-mx': "Graveler de Alola"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Electromagnetic Catapult",
			'fr-fr': "Catapulte Électromagnétique",
			'es-es': "Catapulta Electromagnética",
			'de-de': "Elektromagnetisches Katapult",
			'it-it': "Catapulta Elettromagnetica",
			'pt-br': "Catapulta Eletromagnética",
			'es-mx': "Catapulta Electromagnética"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 70 puntos de daño por cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 70 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 70 puntos de daño por cada cara."
		},

		damage: "70×"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Megaton Fall",
			'fr-fr': "Chute Mégatonne",
			'es-es': "Caída Megatón",
			'de-de': "Megatonnenfall",
			'it-it': "Caduta Megatonica",
			'pt-br': "Queda do Megaton",
			'es-mx': "Caída Megatón"
		},

		effect: {
			'en-us': "This Pokémon also does 40 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 40 dégâts.",
			'es-es': "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 40 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 40 puntos de daño a sí mismo."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",
	illustrator: "Takeshi Nakamura",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817198,
				tcgplayer: 623473
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817198,
				tcgplayer: 623473
			}
		},
	],
}

export default card
