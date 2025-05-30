import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz",
		it: "Breloom",
		es: "Breloom",
		pt: "Breloom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Damage Rush",
			fr: "Charge Destructrice",
			de: "Schadensrausch",
			it: "Sfuriadanni",
			es: "Embestida Dañina",
			pt: "Fúria Destruidora"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 50 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano a mais para cada cara."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			de: "Megasauger",
			it: "Megassorbimento",
			es: "Megaagotar",
			pt: "Megadreno"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card