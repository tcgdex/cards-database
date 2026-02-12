import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		'es-mx': "Pawmi",
		de: "Pamo",
		it: "Pawmi",
		pt: "Pawmi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [921],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Growl",
			fr: "Rugissement",
			es: "Gruñido",
			'es-mx': "Gruñido",
			de: "Heuler",
			it: "Ruggito",
			pt: "Rosnadura"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Tiny Charge",
			fr: "Décharge Mineure",
			es: "Carga Diminuta",
			'es-mx': "Minicarga",
			de: "Mini-Stromstoß",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857607
	}
}

export default card