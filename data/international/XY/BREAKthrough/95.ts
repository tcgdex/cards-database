import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		436,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

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
				'en-us': "If your opponent has only 1 Prize card left, this attack does 60 more damage.",
				'fr-fr': "S'il ne reste qu'une seule carte Récompense à votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si a tu rival solo le queda 1 carta de Premio, este ataque hace 60 puntos de daño más.",
				'it-it': "Se al tuo avversario è rimasta una sola carta Premio, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o seu oponente tiver apenas 1 card de Prêmio restante, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn dein Gegner nur 1 Preiskarte übrig hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.",
	},

	thirdParty: {
		cardmarket: 286341,
		tcgplayer: 107214
	}
}

export default card
