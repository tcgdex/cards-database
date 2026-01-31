import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Kyogre",
		fr: "Kyogre",
		de: "Kyogre"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scary Face",
				fr: "Grimace",
				de: "Scary Face"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut ni attaquer ni battre en retraite lors du prochain tour de votre adversaire.",
				de: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				de: "Hydro Pump"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Water Energy attached to Kyogre but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kyogre qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Does 40 damage plus 10 more damage for each @water Energy attached to Kyogre but not used pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "40+",

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
		tcgplayer: 86548,
		cardmarket: 276517
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
