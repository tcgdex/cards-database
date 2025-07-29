import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Starmie",
		de: "Starmie"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				de: "Aquaknarre"
			},
			effect: {
				en: "This attack does 10 damage plus 20 more damage for each Energy attached to Starmie but not used to pay for this attack's energy cost. You can't add more than 40 damage in this way.",
				de: "Fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Starmie angelegte -Energie, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wird, zu. Du kannst auf diese Weise mehr als 40 Schadenspunkte zufügen."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Blast",
				de: "Kernexplosion"
			},
			effect: {
				en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an das verteidigende Pokémon angelegte Spezial-Energiekarte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275254
	}
}

export default card
