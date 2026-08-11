import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Kabutops δ",
		'fr-fr': "Kabutops δ",
		'de-de': "Kabutops"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Vital Drain",
				'fr-fr': "Évacuation vitale",
				'de-de': "Lebensentzieher"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7).",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O par cette attaque, retirez à Kabutops tous ses États Spéciaux ainsi que 7 marqueurs de dégât (retirez-les lui tous s'il en a moins de 7).",
				'de-de': "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, entferne alle Speziellen Zustände und 7 Schadensmarken von Kabutops (alle, wenn weniger als 7 Schadensmarken auf Kabutops liegen)."
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
				'en-us': "Thunderous Blow",
				'fr-fr': "Coup tonitruant",
				'de-de': "Donnerknall"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kabutops.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Kabutops angelegte -Energie zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276979
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
