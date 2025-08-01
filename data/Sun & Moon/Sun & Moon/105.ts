import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ferocious Bellow",
				fr: "Grognement Féroce",
				es: "Gruñido Feroz",
				it: "Ruggitorvo",
				pt: "Rugido Feroz",
				de: "Wildes Kläffen"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 50 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295417
	}
}

export default card
