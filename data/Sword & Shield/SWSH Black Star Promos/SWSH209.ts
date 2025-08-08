import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		fr: "Toxizap",
		de: "Toxel",
		es: "Toxel",
		pt: "Toxel",
		it: "Toxel",
		en: "Toxel"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Rugissement",
			de: "Heuler",
			es: "Gruñido",
			pt: "Rosnadura",
			it: "Ruggito",
			en: "Growl"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Lightning"],

		name: {
			fr: "Foudre Minuscule",
			de: "Mini-Blitz",
			es: "Relampaguito",
			pt: "Corisquinho",
			it: "Minifulmine",
			en: "Tiny Bolt"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
	}
}

export default card