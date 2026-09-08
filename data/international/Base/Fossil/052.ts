import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita",
		'de-de': "Amonitas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Clairvoyance",
				'fr-fr': "Clairvoyance",
				'de-de': "Hellseherei"
			},
			effect: {
				'en-us': "Your opponent plays with his or her hand face up. This power stops working while Omanyte is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Votre adversaire joue avec sa main révélée. Ce pouvoir cesse de fonctionner lorsqu'Amonita est Endormi, Confus ou Paralysé.",
				'de-de': "Dein gegner spielt mit einer offnene Hand. Diese Fähigkeit verliert ihre Wirkung, solange Amonitas schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Aquaknarre"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Omanyte but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Amonita en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Amonitas abgelegte -Energiekarte zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenpunkte auf diese Art und Weise hinzufügen."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
		'fr-fr': "Disparu depuis longtemps, il peut être réanimé génétiquement à partir d'anciens fossiles."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273913,
				tcgplayer: 44454
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273913,
				tcgplayer: 44454
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
