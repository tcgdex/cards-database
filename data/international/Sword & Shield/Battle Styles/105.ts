import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [679],
	set: Set,

	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Ambush",
			'fr-fr': "Embuscade",
			'es-es': "Emboscada",
			'it-it': "Imboscata",
			'pt-br': "Emboscada",
			'de-de': "Hinterhalt"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The blue eye on the sword's handguard is the true body of Honedge. With its old cloth, it drains people's lives away."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545606,
				tcgplayer: 234194
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545606,
				tcgplayer: 234194
			}
		},
	],
}

export default card
