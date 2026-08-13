import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		es: "Garchomp",
		it: "Garchomp",
		pt: "Garchomp",
		de: "Knakrack"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Jet Headbutt",
				fr: "Bélier Volant",
				de: "Flinke Kopfnuss"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.",
		de: "Die schnelle Bewegung seiner Flügel erzeugt regelrechte Klingen des Windes, die Bäume fällen können."
	},

	thirdParty: {
		cardmarket: 280530,
		tcgplayer: 85625
	}
}

export default card
