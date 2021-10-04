import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Dottler",
		fr: "Coléodôme",
		es: "Dottler",
		it: "Dottler",
		pt: "Dottler",
		de: "Keradar"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Blipbug",
		fr: "Larvadar",
		es: "Blipbug",
		it: "Blipbug",
		pt: "Blipbug",
		de: "Sensect"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reflect",
				fr: "Protection",
				es: "Reflejo",
				it: "Riflesso",
				pt: "Refletir",
				de: "Reflektor"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 40 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 40 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution."
	}
}

export default card
