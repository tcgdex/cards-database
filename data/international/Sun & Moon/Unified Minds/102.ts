import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Poipole",
		'fr-fr': "Vémini",
		'es-es': "Poipole",
		'it-it': "Poipole",
		'pt-br': "Poipole",
		'de-de': "Venicro"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		803,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Belt",
				'fr-fr': "Taloche",
				'es-es': "Sopetón",
				'it-it': "Buttafuori",
				'pt-br': "Cinturão",
				'de-de': "Versohler"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Last Scene",
				'fr-fr': "Dernière Scène",
				'es-es': "Última Escena",
				'it-it': "Ultimo Atto",
				'pt-br': "Última Cena",
				'de-de': "Schlussszene"
			},
			effect: {
				'en-us': "If each player has exactly 1 Prize card remaining, this attack does 130 more damage.",
				'fr-fr': "S’il reste exactement une carte Récompense à chaque joueur, cette attaque inflige 130 dégâts supplémentaires.",
				'es-es': "Si a cada jugador le queda exactamente 1 carta de Premio, este ataque hace 130 puntos de daño más.",
				'it-it': "Se ciascun giocatore ha esattamente una carta Premio rimanente, questo attacco infligge 130 danni in più.",
				'pt-br': "Se cada jogador tiver exatamente 1 carta de Prêmio restante, este ataque causará 130 pontos de dano a mais.",
				'de-de': "Wenn jeder Spieler genau 1 verbleibende Preiskarte hat, fügt diese Attacke 130 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Ultra Beast is well enough liked to be chosen as a first partner in its own world.",
	},

	thirdParty: {
		cardmarket: 388317,
		tcgplayer: 195042
	}
}

export default card
