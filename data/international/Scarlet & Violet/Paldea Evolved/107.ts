import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		'fr-fr': "Colossinge",
		'en-us': "Primeape",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Férosinge",
		'en-us': "Mankey",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Balayage",
			'en-us': "Low Kick",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Martelage",
			'en-us': "Pummel",
			'es-es': "Aporrear",
			'it-it': "Legnata",
			'pt-br': "Esmurrar",
			'de-de': "Trommler"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715582,
				tcgplayer: 497522,
				cardtrader: 248296
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715582,
				tcgplayer: 497522,
				cardtrader: 248296
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
	},
}

export default card
