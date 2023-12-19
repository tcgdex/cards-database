import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Headache",
				fr: "Migraine",
				de: "Kopfweh"
			},
			effect: {
				en: "Your opponent can't play Trainer cards during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Dresseur durant son prochain tour.",
				de: "Dein gegner kann während seines nächsten Zuges keine Trainerkarte spielen."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf drei Münzen. Dieser Angriff fügt jedesmal wenn die Münze 'Kopf' zeigt 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il distrait ses ennemis avec des grimaces débiles et les attaque ensuite avec ses pouvoirs psy."
	}
}

export default card
