import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
		de: "Marill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Marill but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Marill mais non utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 20 Schadenspunkte plus 10 Schadenspunkte für jede an Marill angelegte {W} Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verrechnet wurde. Du kannst nicht mehr als 20 Schadenspunkte auf diese Weise hinzufügen."
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
		en: "The tip of its tail, which contains oil that is lighter than water, lets it swim without drowning.",
		fr: "L'extrémité de sa queue, qui contient une huile plus légère que l'eau, lui permet de nager sans couler.",
		de: "Dank seiner Schwanzspitze, in der sich Öl befindet, das leichter als Wasser ist, kann es schwimmen, ohne unterzugehen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87211
			},
		}
	]
}

export default card
