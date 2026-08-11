import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [542],
	set: Set,

	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'de-de': "Matrifol",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'es-es': "Leavanny",
		'es-mx': "Leavanny"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'de-de': "Folikon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'es-es': "Swadloon",
		'es-mx': "Swadloon"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Healing Wrapping",
			'fr-fr': "Lange Apaisant",
			'de-de': "Heilende Wickel",
			'it-it': "Copertura Curativa",
			'pt-br': "Bandagem Curativa",
			'es-es': "Mantilla Curativa",
			'es-mx': "Mantita Sanadora"
		},

		effect: {
			'en-us': "Heal 100 damage from each of your Basic Pokémon.",
			'fr-fr': "Soignez 100 dégâts de chacun de vos Pokémon de base.",
			'de-de': "Heile 100 Schadenspunkte bei jedem deiner Basis-Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon Base da 100 danni.",
			'pt-br': "Cure 100 pontos de dano de cada um dos seus Pokémon Básicos.",
			'es-es': "Cura 100 puntos de daño a cada uno de tus Pokémon Básicos.",
			'es-mx': "Cura 100 puntos de daño a cada uno de tus Pokémon Básicos."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "X-Scissor",
			'fr-fr': "Plaie Croix",
			'de-de': "Kreuzschere",
			'it-it': "Forbice X",
			'pt-br': "Tesoura X",
			'es-es': "Tijera X",
			'es-mx': "Tijera X"
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

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836074,
				tcgplayer: 642204
			}
		},
	],
}

export default card
