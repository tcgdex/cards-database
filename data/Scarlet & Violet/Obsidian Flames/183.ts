import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Fragroin",
		en: "Oinkologne",
		es: "Oinkologne",
		it: "Oinkologne",
		pt: "Oinkologne",
		de: "Fragrunz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Fragrance Étourdissante",
			en: "Confounding Cologne",
			es: "Fragancia Desconcertante",
			it: "Profumo Perturbante",
			pt: "Perfume Confuso",
			de: "Verwirrender Duft"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Coup de Pied Impactant",
			en: "High-Impact Kick",
			es: "Patada de Alto Impacto",
			it: "Calcio Dirompente",
			pt: "Chute de Alto Impacto",
			de: "Hochwirksamer Kick"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 60 dégâts.",
			en: "Flip a coin. If tails, this Pokémon also does 60 damage to itself.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Jogue uma moeda. Se sair coroa, este Pokémon também causará 60 pontos de dano a si mesmo.",
			de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Pani Kobayashi",

	thirdParty: {
		cardmarket: 725263
	}
}

export default card