import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar",
		es: "Darumaka de Galar",
		it: "Darumaka di Galar",
		pt: "Darumaka de Galar",
		de: "Galar-Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Atsuko Nishida",

	description: {
		en: "The colder they get, the more energetic they are. They freeze their breath to make snowballs, using them as ammo for playful snowball fights."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			de: "Waghalsiger Sturmangriff",
			es: "Carga Descuidada",
			pt: "Carga Indomável",
			it: "Carica Avventata"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 10 dégâts.",
			de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 10 Schadenspunkte zu.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 10 puntos de daño a sí mismo.",
			pt: "Jogue 1 moeda. Se sair coroa, este Pokémon também causará 10 pontos de dano a si mesmo.",
			it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 10 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card