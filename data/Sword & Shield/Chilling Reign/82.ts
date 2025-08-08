import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		en: "Galarian Yamask",
		fr: "Tutafeh de Galar",
		es: "Yamask de Galar",
		it: "Yamask di Galar",
		pt: "Yamask de Galar",
		de: "Galar-Makabaja"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Brutal Swing",
			fr: "Centrifugifle",
			es: "Giro Vil",
			it: "Vorticolpo",
			pt: "Balanço Violento",
			de: "Wirbler"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It's said that this Pokémon was formed when an ancient clay tablet was drawn to a vengeful spirit."
	}
}

export default card
