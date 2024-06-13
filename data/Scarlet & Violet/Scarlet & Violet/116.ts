import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [552],
	set: Set,

	name: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandile"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

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
			fr: "S'il reste exactement une carte Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si a tu rival le queda exactamente una carta de Premio, este ataque hace 90 puntos de daño más.",
			it: "Se il tuo avversario ha esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
			pt: "Se o seu oponente tiver exatamente 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dein Gegner genau 1 verbleibende Preiskarte hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "kantaro",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card