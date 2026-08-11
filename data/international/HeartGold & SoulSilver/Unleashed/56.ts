import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [95],

	hp: 90,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Healer",
				'fr-fr': "Guérisseur d’énergie",
				'de-de': "Energie-Heiler"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card from your hand to Onix, remove a damage counter from Onix.",
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à Onix, retirez-lui 1 marqueur de dégât.",
				'de-de': "Wenn du 1 Energiekarte von deiner Hand an Onix anlegst, entferne 1 Schadensmarke von Onix."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Boundless Power",
				'fr-fr': "Puissance illimitée",
				'de-de': "Unbegrenzte Kraft"
			},
			effect: {
				'en-us': "Onix can't attack during your next turn.",
				'fr-fr': "Pendant votre prochain tour, Onix ne peut pas attaquer.",
				'de-de': "Onix kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87884,
				cardmarket: 279212
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87884,
				cardmarket: 279212
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"],
		}
	],

}

export default card
