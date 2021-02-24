import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Crush",
				fr: "Écras'Énergie",
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to all of your opponent's Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flash Impact",
				fr: "Impact-Flash",
			},
			effect: {
				en: "Does 20 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
