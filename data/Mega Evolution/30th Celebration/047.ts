import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			de: "Knuddler",
			es: "Carantoña",
			it: "Carineria",
			'es-mx': "Juego Rudo"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card