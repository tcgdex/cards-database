import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Kabutops δ",
		fr: "Kabutops δ",
		de: "Kabutops"
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
		en: "Kabuto",
		fr: "Kabuto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Vital Drain",
				fr: "Évacuation vitale",
				de: "Lebensentzieher"
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7).",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, retirez à Kabutops tous ses États Spéciaux ainsi que 7 marqueurs de dégât (retirez-les lui tous s'il en a moins de 7).",
				de: "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, entferne alle Speziellen Zustände und 7 Schadensmarken von Kabutops (alle, wenn weniger als 7 Schadensmarken auf Kabutops liegen)."
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
				en: "Thunderous Blow",
				fr: "Coup tonitruant",
				de: "Donnerknall"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kabutops.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Kabutops angelegte -Energie zu."
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
