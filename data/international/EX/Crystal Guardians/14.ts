import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Blastoise",
		'fr-fr': "Tortank",
		'de-de': "Turtok"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Water Pressure",
				'fr-fr': "Pression aquatique",
				'de-de': "Wasserdruck"
			},
			effect: {
				'en-us': "As long as Blastoise's remaining HP is 40 or less, Blastoise does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant qu'il lui reste 40 Points de vie ou moins, Tortank inflige 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Solange die verbliebenen KP von Turtok 40 oder weniger betragen, fügt Turtok dem Verteidigenden Pokémon 40 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				'fr-fr': "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Tortank qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				'de-de': "Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Turtok angelegte -Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
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


	retreat: 2,

	thirdParty: {
		cardmarket: 277095,
		tcgplayer: 83892
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["national-championships"]
		},
		{
			type: "normal",
			stamp: ["national-championships","staff"]
		},
	]
}

export default card
