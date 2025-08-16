import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				es: "Patada Baja",
				it: "Colpo Basso",
				pt: "Rasteira",
				de: "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Lucha Fight",
				fr: "Combat Lucha",
				es: "Lucha Peleona",
				it: "Lotta Libera",
				pt: "Luta Lucha",
				de: "Freistilkampf"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 30 more damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311901,
		tcgplayer: 149074
	}
}

export default card
