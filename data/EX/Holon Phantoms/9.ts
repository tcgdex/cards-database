import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Kabutops δ",
		fr: "Kabutops δ ESPÈCES DELTA"
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
				fr: "Évacuation vitale"
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7).",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, retirez à Kabutops tous ses États Spéciaux ainsi que 7 marqueurs de dégât (retirez-les lui tous s'il en a moins de 7)."
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
				fr: "Coup tonitruant"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kabutops."
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





}

export default card
