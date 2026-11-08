import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [69],
	set: Set,

	name: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
		'es-es': "Bellsprout",
		'it-it': "Bellsprout",
		'pt-br': "Bellsprout",
		'de-de': "Knofensa"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin",
			'es-es': "Carga Tóxica",
			'it-it': "Velenoshock",
			'pt-br': "Venochoque",
			'de-de': "Giftschock"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 40 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 40 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544901,
				tcgplayer: 234035
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544901,
				tcgplayer: 234035
			}
		},
	],
}

export default card
