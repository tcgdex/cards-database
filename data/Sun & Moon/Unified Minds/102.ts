import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Poipole",
		fr: "Vémini",
		es: "Poipole",
		it: "Poipole",
		pt: "Poipole",
		de: "Venicro"
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
				en: "Belt",
				fr: "Taloche",
				es: "Sopetón",
				it: "Buttafuori",
				pt: "Cinturão",
				de: "Versohler"
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
				en: "Last Scene",
				fr: "Dernière Scène",
				es: "Última Escena",
				it: "Ultimo Atto",
				pt: "Última Cena",
				de: "Schlussszene"
			},
			effect: {
				en: "If each player has exactly 1 Prize card remaining, this attack does 130 more damage.",
				fr: "S’il reste exactement une carte Récompense à chaque joueur, cette attaque inflige 130 dégâts supplémentaires.",
				es: "Si a cada jugador le queda exactamente 1 carta de Premio, este ataque hace 130 puntos de daño más.",
				it: "Se ciascun giocatore ha esattamente una carta Premio rimanente, questo attacco infligge 130 danni in più.",
				pt: "Se cada jogador tiver exatamente 1 carta de Prêmio restante, este ataque causará 130 pontos de dano a mais.",
				de: "Wenn jeder Spieler genau 1 verbleibende Preiskarte hat, fügt diese Attacke 130 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 388317,
		tcgplayer: 195042
	}
}

export default card
