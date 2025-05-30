import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Smoliv",
		fr: "Olivini",
		de: "Olini",
		it: "Smoliv",
		es: "Smoliv",
		pt: "Smoliv"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Nutrients",
			fr: "Nutriments",
			de: "Nährstoffe",
			it: "Nutrienti",
			es: "Nutrientes",
			pt: "Nutrientes"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			de: "Sprühwasser",
			it: "Fluidospray",
			es: "Fluido Rociado",
			pt: "Fluido Spray"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card