import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Mitsuhiro Arita",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Thunder Jolt",
			fr: "Secousse Tonnerre",
			es: "Sacudida Atronadora",
			it: "Scoppiotuono",
			pt: "Choque do Trovão",
			de: "Donnerrüttler"
		},

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Jogue 1 moeda. Se sair coroa, este Pokémon também causará 10 pontos de dano a si mesmo.",
			de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
	},

	dexId: [25]
}

export default card
