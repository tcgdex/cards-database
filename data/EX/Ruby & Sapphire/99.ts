import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Lapras ex",
		fr: "Lokhlass ex",
		de: "Lapras ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [131],

	hp: 110,

	stage: "Basic",
	types: [
		"Water"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Energy Ball",
				fr: "Boule d'énergie",
				de: "Energieball"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 points de dégât plus 10 points de dégât supplémentaires pour chaque Énergie attachée à Lokhlass Ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lapras ex angelegte Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 20 Schadenspunkte hinzufügen."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86626,
				cardmarket: 275747
			}
		}
	]
}

export default card
