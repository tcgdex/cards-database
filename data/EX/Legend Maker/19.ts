import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure",
				de: "Doppelte Rüstung"
			},
			effect: {
				en: "As long as Lanturn has any Water Energy attached to it, Lanturn is both Water and Lightning type.",
				fr: "Tant que Lanturn possède des Énergies , il est de type  et .",
				de: "Solange an Lanturn eine -Energie angelegt ist, ist Lanturn ein Pokémon vom Typ  und ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-rasoir",
				de: "Rasierflosse"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Water Energy attached to Lanturn but not used to pay for this attack's Energy cost. You can't add more then 40 damage in this way.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Lanturn qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Lanturn -Energiekarte zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276896,
		tcgplayer: 86606
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
