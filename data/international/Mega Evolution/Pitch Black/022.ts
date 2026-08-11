import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Palafin",
		'fr-fr': "Superdofin",
		'es-es': "Palafin",
		'es-mx': "Palafin",
		'de-de': "Delfinator",
		'it-it': "Palafin",
		'pt-br': "Palafin"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [964],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Finizen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Knuckle Justice",
			'fr-fr': "Poing Justice",
			'es-es': "Nudillo Justiciero",
			'es-mx': "Nudillos Justicieros",
			'de-de': "Faustrecht",
			'it-it': "Pugno della Giustizia",
			'pt-br': "Punho da Justiça"
		},

		cost: ["Water", "Water"],

		damage: "80+",

		effect: {
			'en-us': "If your opponent has exactly 1 Prize card remaining, this attack does 200 more damage.",
			'fr-fr': "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 200 dégâts supplémentaires.",
			'es-es': "Si a tu rival le queda exactamente una carta de Premio, este ataque hace 200 puntos de daño más.",
			'es-mx': "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 200 puntos de daño más.",
			'de-de': "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			'it-it': "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 200 danni in più.",
			'pt-br': "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 200 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895810,
				tcgplayer: 704779
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895810,
				tcgplayer: 704779
			}
		},
	],
}

export default card
