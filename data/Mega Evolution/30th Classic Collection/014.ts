import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [25],

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Rogne",
			de: "Nagen",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Thunder Jolt",
			fr: "Secousse Tonnerre",
			de: "Donnerschock",
			es: "Golpe de trueno",
			it: "Scoppiotuono",
			pt: "Choque do Trovão",
			'es-mx': "Choque Trueno"
		},

		effect: {
			en: "Flip a coin. If tails, Pikachu does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, Pikachu s'inflige 10 dégâts.",
			de: "Wirf eine Münze. Bei \"Zahl\" fügt Pikachu sich selbst 10 Schadenspunkte zu.",
			es: "Echa la moneda a cara o cruz. Si sale cruz, Pikachu se hace 10 puntos de daño a sí mismo.",
			it: "Lancia una moneta. Se esce croce, Pikachu si infligge 10 danni.",
			pt: "Tire \"cara ou coroa\". Se der \"coroa\", Pikachu causa 10 pts. de dano a si mesmo.",
			'es-mx': "Tira la moneda a cara o cruz. Si sale cruz, Pikachu se hace 10 puntos de daño a sí mismo."
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907939,
				tcgplayer: 716194
			}
		}
	],
}

export default card
