import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Rayquaza δ",
		fr: "Rayquaza δ ESPÈCES DELTA"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 90,
	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Guard",
				fr: "Garde Delta"
			},
			effect: {
				en: "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.",
				fr: "Tant que Rayquaza possède des cartes Énergie Holon, ignorez l'effet de son attaque Orage d'éclairs."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Rayquaza.",
				fr: "Inflige 10 dégâts multipliés par le nombre total d'Énergie attachée à Rayquaza."
			},
			damage: "10×",

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Lightning Storm",
				fr: "Orage d'éclairs"
			},

			effect: {
				en: "Put 7 damage counters on Rayquaza.",
				fr: "Placez 7 marqueurs de dégât sur Rayquaza."
			},

			damage: 70
		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
