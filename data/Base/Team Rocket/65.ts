import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Mitsuhiro Arita",
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
				en: "Dizziness",
				fr: "Vertige",
				de: "Schwindelgefühl"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe eine Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Psyduck but not used to pay for this attack. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Psykokwak en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Enton abgelegte {W}-Energie zu, die nicht zum Zahlen für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 20 Schadenspunkte hinzufügen."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It is often seen holding its head in its paws, as if it were suffering from a headache.",
		fr: "On le voit souvent se prendre la tête entre les mains, comme s'il souffrait de migraines.",
		de: "Man sieht es oft mit den Pfoten überm Kopf, als ob es Kopfweh hätte."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274118,
				tcgplayer: 88431
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274118,
				tcgplayer: 88431
			}
		}
	]
}

export default card
