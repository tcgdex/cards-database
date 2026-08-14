import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
		es: "Vanilluxe",
		it: "Vanilluxe",
		pt: "Vanilluxe",
		de: "Gelatwino"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
		de: "Gelatroppo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "ChillMAX",
				fr: "Gel Maximal",
				de: "Kalter Schauer"
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Cold Breath",
				fr: "Souffle Froid",
				de: "Eisiger Atem"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Swallowing large amounts of water, they make snow clouds inside their bodies and, when angry, cause violent blizzards.",
		de: "Es verschluckt Unmengen an Wasser und wandelt es intern in Schneewolken um. Ist es wütend, erzeugt es Schneestürme."
	},

	thirdParty: {
		cardmarket: 280907,
		tcgplayer: 90276
	}
}

export default card
