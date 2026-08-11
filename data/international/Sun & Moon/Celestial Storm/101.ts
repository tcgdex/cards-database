import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Kartana",
		'fr-fr': "Katagami",
		'es-es': "Kartana",
		'it-it': "Kartana",
		'pt-br': "Kartana",
		'de-de': "Katagami"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		798,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Divine Paper",
				'fr-fr': "Papier Sublime",
				'es-es': "Papel Divino",
				'it-it': "Fendente Celeste",
				'pt-br': "Papel Divino",
				'de-de': "Himmelspapier"
			},
			effect: {
				'en-us': "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
				'fr-fr': "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si a tu rival le quedan exactamente 6 cartas de Premio, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il tuo avversario ha esattamente sei carte Premio rimanenti, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o seu oponente tiver exatamente 6 cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner genau 6 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "40+",

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

	retreat: 1,

	description: {
		'en-us': "One of the Ultra Beast life-forms, it was observed cutting down a gigantic steel tower with one stroke of its blade.",
	},

	thirdParty: {
		cardmarket: 361343,
		tcgplayer: 170926
	}
}

export default card
