import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Gale Roundhouse",
			fr: "Coup Circulaire Bourrasque",
			es: "Gancho Vendaval",
			it: "Calcioraffica",
			pt: "Chute Vendaval",
			de: "Rundumwirbel"
		},

		effect: {
			en: "If your opponent has 5 or fewer cards in their hand, this attack does 60 more damage.",
			fr: "Si votre adversaire a 5 cartes ou moins dans sa main, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si tu rival tiene 5 cartas o menos en su mano, este ataque hace 60 puntos de daño más.",
			it: "Se il tuo avversario ha cinque o meno carte in mano, questo attacco infligge 60 danni in più.",
			pt: "Se o seu oponente tiver 5 ou menos cartas na mão dele, este ataque causará 60 pontos de dano a mais.",
			de: "Wenn dein Gegner 5 oder weniger Karten auf seiner Hand hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		pt: "Mienfoo",
		de: "Lin-Fu"
	}
}

export default card
