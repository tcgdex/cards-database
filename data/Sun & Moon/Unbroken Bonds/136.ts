import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		it: "Togepi",
		pt: "Togepi",
		de: "Togepi"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 50,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Daunt",
				fr: "Découragement",
				es: "Arredrar",
				it: "Scoraggiare",
				pt: "Atemorizar",
				de: "Entmutigen"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372423
	}
}

export default card
