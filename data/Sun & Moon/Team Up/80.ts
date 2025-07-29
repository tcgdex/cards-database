import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
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
		en: "Larvitar",
		fr: "Embrylex",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
				es: "Vendetta",
				it: "Rivincita",
				pt: "Revide",
				de: "Gegenstoß"
			},
			effect: {
				en: "If your opponent has exactly 1 Prize card remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 1 carte Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si a tu rival le queda exactamente 1 carta de Premio, este ataque hace 90 puntos de daño más.",
				it: "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
				pt: "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 369010
	}
}

export default card
