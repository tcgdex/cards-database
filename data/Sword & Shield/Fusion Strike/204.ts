import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [115],
	set: Set,

	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		es: "Kangaskhan",
		it: "Kangaskhan",
		pt: "Kangaskhan",
		de: "Kangama"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		en: "You shouldn't get close to the child when it's playing outside its mother's pouch. Its mother is always nearby watching over it."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			es: "Destructor",
			pt: "Pancada",
			it: "Botta"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Coordinated One-Two Punch",
			fr: "En Deux Punch Coordonnés",
			de: "Koordinierter Doppelschubser",
			es: "Puñetazo Uno-Dos Coordinado",
			pt: "Soco em Dois Tempos Coordenado",
			it: "Pugni Rapidi Coordinati"
		},

		damage: "60+",

		effect: {
			en: "Flip a coin. If heads, this attack does 100 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			pt: "Jogue 1 moeda. Se sair cara, este ataque causará 100 pontos de dano a mais.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più."
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