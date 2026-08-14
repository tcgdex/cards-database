import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Gardevoir ex",
		fr: "Gardevoir ex",
		de: "Guardevoir-ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [282],

	hp: 150,

	stage: "Stage2",
	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Feedback",
				fr: "Réaction",
				de: "Rückkopplung"
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes.",
				de: "Zähle die Karten auf der Hand deines Gegners. Lege die entsprechende Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psystorm",
				fr: "Tempête Psy",
				de: "Psisturm"
			},
			effect: {
				en: "Does 10 damage times the total amount of Energy attached to all Pokémon in play.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées à tous les Pokémon en jeu.",
				de: "Fügt für jede Energie, die an allen Pokémon im Spiel angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275873,
				tcgplayer: 85641
			}
		},
		{
			type: "holo",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871813,
				tcgplayer: 477388
			}
		}
	],

}

export default card
