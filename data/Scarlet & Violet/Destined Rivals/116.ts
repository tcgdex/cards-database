import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Krokorok",
		fr: "Escroco",
		de: "Rokkaiman",
		it: "Krokorok",
		es: "Krokorok",
		pt: "Krokorok"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Payback",
			fr: "Représailles",
			de: "Gegenstoß",
			it: "Rivincita",
			es: "Vendetta",
			pt: "Revide"
		},

		effect: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 90 more damage.",
			fr: "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
			es: "Si a tu rival le queda exactamente una carta de Premio, este ataque hace 90 puntos de daño más.",
			pt: "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card