import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix"
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
				en: "Energy Healer",
				fr: "Guérisseur d’énergie",
				de: "Energie-Heiler"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to Onix, remove a damage counter from Onix.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à Onix, retirez-lui 1 marqueur de dégât.",
				de: "Wenn du 1 Energiekarte von deiner Hand an Onix anlegst, entferne 1 Schadensmarke von Onix."
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
				en: "Boundless Power",
				fr: "Puissance illimitée",
				de: "Unbegrenzte Kraft"
			},
			effect: {
				en: "Onix can't attack during your next turn.",
				fr: "Pendant votre prochain tour, Onix ne peut pas attaquer.",
				de: "Onix kann in deinem nächsten Zug nicht angreifen."
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
		en: "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
		de: "Es bohrt sich mit 80 km/h durch das Erdreich, indem es seinen massive, rauen Körper dreht und windet."
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
