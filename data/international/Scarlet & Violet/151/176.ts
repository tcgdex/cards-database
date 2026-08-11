import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		'fr-fr': "Têtarte",
		'en-us': "Poliwhirl",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Ptitard",
		'en-us': "Poliwag",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Grosse Vague",
			'en-us': "Wave Splash",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Bond de Grenouille",
			'en-us': "Frog Hop",
			'es-es': "Salto de la Rana",
			'it-it': "Ranabalzo",
			'pt-br': "Pulo de Sapo",
			'de-de': "Froschhopser"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon's sweat is a slimy mucus. When captured, Poliwhirl can slither from its enemies' grasp and escape.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733771,
				tcgplayer: 517034,
				cardtrader: 261295
			}
		},
	],

	illustrator: "Gemi",

	
}

export default card
