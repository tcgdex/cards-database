import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [141],
	set: Set,

	name: {
		fr: "Kabutops",
		en: "Kabutops",
		es: "Kabutops",
		it: "Kabutops",
		pt: "Kabutops",
		de: "Kabutops"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Méthode à l'Ancienne",
			en: "Ancient Way",
			es: "Modo Ancestral",
			it: "Modo Antico",
			pt: "À Moda Antiga",
			de: "Uralte Methode"
		},

		effect: {
			fr: "La Faiblesse du Pokémon Actif de votre adversaire est de ×4.",
			en: "Apply Weakness for your opponent's Active Pokémon as ×4 instead.",
			es: "Aplica una Debilidad de x 4 al Pokémon Activo de tu rival.",
			it: "La debolezza del Pokémon attivo del tuo avversario diventa ×4.",
			pt: "Aplique Fraqueza ao Pokémon Ativo do seu oponente de ×4.",
			de: "Verrechne Schwäche beim Aktiven Pokémon deines Gegners stattdessen als ×4."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Lame Siphon",
			en: "Draining Blade",
			es: "Cuchilla Drenaje",
			it: "Assorbilama",
			pt: "Lâmina Sugadora",
			de: "Zehrende Klinge"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 733736
	}
}

export default card
