import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'de-de': "Amoroso"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Aquaknarre"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Amonistar en plus du coût d'Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Amoroso abgelegte -Energiekarte zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenpunkte auf diese Art und Weise hinzufügen."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
				'de-de': "Dornkanone"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt jedesmal wenn die Münze 'Kopf' zeigt 20 Schadenspunkte zu."
			},
			damage: "30x",

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
		'en-us': "A prehistoric Pokémon that died out when its heavy shell made it impossible for it to catch prey.",
		'fr-fr': "Un Pokémon préhistorique qui disparut quand sa coquille devint trop lourde à déplacer."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273901,
				tcgplayer: 44442
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273901,
				tcgplayer: 44442
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
