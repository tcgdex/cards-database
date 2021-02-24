import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Torkoal V",
		fr: "Chartor V",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 210,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion Pillar",
				fr: "Pilastre de Combustion",
			},
			effect: {
				en: "Discard the top card of your deck. If that card is a Fire Energy card, this attack does 90 more damage.",
				fr: "Défaussez la carte du dessus de votre deck. Si cette carte-là est une carte Énergie Feu, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: "90+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steam Crush",
				fr: "Écrasement Vapeur",
			},
			effect: {
				en: "Discard 2 Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
