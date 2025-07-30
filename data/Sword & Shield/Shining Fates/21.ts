import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [382],
	set: Set,

	name: {
		fr: "Kyogre",
		en: "Kyogre",
		es: "Kyogre",
		it: "Kyogre",
		pt: "Kyogre",
		de: "Kyogre"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Amazing Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Déferlante Magnifique",
			en: "Amazing Surge",
			es: "Oleada Increíble",
			it: "Ondata Policroma",
			pt: "Rebentação Incrível",
			de: "Atemberaubende Woge"
		},

		effect: {
			fr: "Cette attaque inflige 80 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 80 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 80 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 80 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 80 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Lightning", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It is said to have widened the seas by causing downpours. It had been asleep in a marine trench."
	},

	thirdParty: {
		cardmarket: 539128
	}
}

export default card
