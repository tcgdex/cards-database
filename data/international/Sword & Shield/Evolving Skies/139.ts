import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque",
			'es-es': "Ataque Rápido",
			'it-it': "Attacco Rapido",
			'pt-br': "Quick Attack",
			'de-de': "Ruckzuckhieb"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Flip a coin. If heads, this attack does 20 more damage.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [662],

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	description: {
		'en-us': "Its speed right after takeoff already puts it in the top speed class of all bird Pokémon."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574197,
				tcgplayer: 246882
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574197,
				tcgplayer: 246882
			}
		},
	],
}

export default card
