import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [677],
	set: Set,

	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Focused Wish",
			'fr-fr': "Vœu Fervent",
			'es-es': "Intenso Deseo",
			'it-it': "Intensiderio",
			'pt-br': "Desejo Direcionado",
			'de-de': "Gezielter Wunsch"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "There's enough psychic power in Espurr to send a wrestler flying, but because this power can't be controlled, Espurr finds it troublesome."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545411,
				tcgplayer: 234232
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545411,
				tcgplayer: 234232
			}
		},
	],
}

export default card
