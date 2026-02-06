import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [152],

	name: {
		en: "Chikorita",
		fr: "Germignon",
		es: "Chikorita",
		'es-mx': "Chikorita",
		de: "Endivie",
		it: "Chikorita",
		pt: "Chikorita"
	},

	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			'es-mx': "Bomba Semilla",
			de: "Samenbomben",
			it: "Semebomba",
			pt: "Bomba de Sementes"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675820,
		cardmarket: 869619
	}
}

export default card