import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [541],
	set: Set,

	name: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'es-es': "Swadloon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'de-de': "Folikon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'es-es': "Sewaddle",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'de-de': "Strawickl"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		'en-us': "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Trip Over",
			'fr-fr': "Croche-Pied",
			'de-de': "Stolperer",
			'es-es': "Tropezón",
			'pt-br': "Tropeção",
			'it-it': "Inciampare"
		},

		damage: "10+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'de-de': "Samenbomben",
			'es-es': "Bomba Germen",
			'pt-br': "Bomba de Sementes",
			'it-it': "Semebomba"
		},

		damage: 60
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582038,
				tcgplayer: 253080
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582038,
				tcgplayer: 253080
			}
		},
	],
}

export default card
