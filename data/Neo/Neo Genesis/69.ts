import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				de: "Screech"
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				fr: "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires au Pokémon Défenseur.",
				de: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Rage"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Onix.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Onix.",
				de: "Does 10 damage plus 10 more damage for each damage counter on Onix."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il serpente et ondule à travers le sol. Le rugissement bruyant de son excavation résonne très loin."
	},

	thirdParty: {
		cardmarket: 274469
	}
}

export default card
