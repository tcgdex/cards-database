import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Payback",
				'fr-fr': "Représailles",
				'es-es': "Vendetta",
				'it-it': "Rivincita",
				'pt-br': "Revide",
				'de-de': "Gegenstoß"
			},
			effect: {
				'en-us': "If your opponent has exactly 1 Prize card remaining, this attack does 90 more damage.",
				'fr-fr': "S’il reste exactement 1 carte Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain.",
	},

	thirdParty: {
		cardmarket: 369010,
		tcgplayer: 183858
	}
}

export default card
