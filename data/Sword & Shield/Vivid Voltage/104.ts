import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [262],

	name: {
		en: "Mightyena",
		fr: "Grahyèna",
		es: "Mightyena",
		it: "Mightyena",
		pt: "Mightyena",
		de: "Magnayen"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna",
		es: "Poochyena",
		it: "Poochyena",
		pt: "Poochyena",
		de: "Fiffyen"
	},

	attacks: [
		{
			cost: [
				"Darkness",
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
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pitch-Black Fangs",
				fr: "Crocs Nuit Noire",
				es: "Colmillos Azabaches",
				it: "Zanne Buiopesto",
				pt: "Presas do Breu",
				de: "Pechschwarze Fänge"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It chases down prey in a pack of around ten. They defeat foes with perfectly coordinated teamwork."
	},

	thirdParty: {
		cardmarket: 511940
	}
}

export default card
