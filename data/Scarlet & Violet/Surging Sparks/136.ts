import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		en: "Palkia",
		fr: "Palkia",
		es: "Palkia",
		it: "Palkia",
		pt: "Palkia",
		de: "Palkia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Water"],

		name: {
			en: "Space Crash",
			fr: "Écrasement Spatial",
			es: "Colisión Espacial",
			it: "Schianto Spaziale",
			pt: "Colisão do Espaço",
			de: "Raumbruch"
		},

		effect: {
			en: "This attack does 40 damage for each Basic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie de base attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Energía Básica unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni per ogni Energia base assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia Básica ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Basis-Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "danciao",

	thirdParty: {
		cardmarket: 794509
	}
}

export default card
