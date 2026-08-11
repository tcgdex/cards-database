import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'de-de': "Seedraking"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [230],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocean"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Arrow",
				'fr-fr': "Flèche d’eau",
				'de-de': "Wasserpfeil"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stream Pump",
				'fr-fr': "Pompe à eau",
				'de-de': "Schwallpumpe"
			},
			effect: {
				'en-us': "You may do 50 damage plus 30 more damage. If you do, return an Energy card attached to Kingdra to your hand.",
				'fr-fr': "Vous pouvez infliger 50 dégâts plus 30 dégâts supplémentaires. Dans ce cas, récupérez dans votre main une carte Énergie attachée à Hyporoi.",
				'de-de': "Du kannst mit diesem Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, nimm 1 Energiekarte, die an Seedraking angelegt ist, zurück auf deine Hand."
			},
			damage: "50+",

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
		'en-us': "It sleeps deep on the ocean floor to build its energy. It is said to cause tornadoes as it wakes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86447,
				cardmarket: 279173
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86447,
				cardmarket: 279173
			}
		},
	],

}

export default card
