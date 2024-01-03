import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		de: "Seedraking"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocean",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d’eau",
				de: "Wasserpfeil"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stream Pump",
				fr: "Pompe à eau",
				de: "Schwallpumpe"
			},
			effect: {
				en: "You may do 50 damage plus 30 more damage. If you do, return an Energy card attached to Kingdra to your hand.",
				fr: "Vous pouvez infliger 50 dégâts plus 30 dégâts supplémentaires. Dans ce cas, récupérez dans votre main une carte Énergie attachée à Hyporoi.",
				de: "Du kannst mit diesem Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zufügen. Wenn du das machst, nimm 1 Energiekarte, die an Seedraking angelegt ist, zurück auf deine Hand."
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
		en: "It sleeps deep on the ocean floor to build its energy. It is said to cause tornadoes as it wakes."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
