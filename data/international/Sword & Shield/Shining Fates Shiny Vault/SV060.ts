import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [885],
	set: Set,

	name: {
		'fr-fr': "Fantyrm",
		'en-us': "Dreepy",
		'es-es': "Dreepy",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
		'de-de': "Grolldra"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'fr-fr': "Vive-Attaque",
			'en-us': "Quick Attack",
			'es-es': "Ataque Rápido",
			'it-it': "Attacco Rapido",
			'pt-br': "Ataque Rápido",
			'de-de': "Ruckzuckhieb"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "After being reborn as a ghost Pokémon, Dreepy wanders the areas it used to inhabit back when it was alive in prehistoric seas."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539688,
				tcgplayer: 232426
			}
		},
	],
}

export default card
