import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Palafin",
		fr: "Superdofin",
		es: "Palafin",
		'es-mx': "Palafin",
		de: "Delfinator",
		it: "Palafin",
		pt: "Palafin"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [964],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Finizen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Knuckle Justice",
			fr: "Poing Justice",
			es: "Nudillo Justiciero",
			'es-mx': "Nudillos Justicieros",
			de: "Faustrecht",
			it: "Pugno della Giustizia",
			pt: "Punho da Justiça"
		},

		cost: ["Water", "Water"],

		damage: "80+",

		effect: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 200 more damage.",
			fr: "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 200 dégâts supplémentaires.",
			es: "Si a tu rival le queda exactamente una carta de Premio, este ataque hace 200 puntos de daño más.",
			'es-mx': "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 200 puntos de daño más.",
			de: "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			it: "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 200 danni in più.",
			pt: "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 200 pontos de dano a mais."
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
