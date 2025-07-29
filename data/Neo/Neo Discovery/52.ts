import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],

			name: {
				en: "Energy Cycle",
				fr: "Cycle énergétique",
				de: "Energy Cycle"
			},

			effect: {
				en: "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Défenseur et 1 Pokémon du Banc de votre adversaire. Attachez-lui cette carte Énergie.",
				de: "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon."
			},

			damage: 10
		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy",
				fr: "Super psy",
				de: "Super Psy"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "En Amérique du Sud, on dit que son œil droit voit l'avenir et le gauche, le passé."
	},

	thirdParty: {
		cardmarket: 274563
	}
}

export default card
