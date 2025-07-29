import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
				fr: "Roussi",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Incinerate",
				fr: "Calcination",
			},
			effect: {
				en: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280141
	}
}

export default card
