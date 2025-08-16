import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],

			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Feint Attack"
			},

			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers or any other effects on the Defending Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts de l'attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoirs Pokémon ou tout autre effet en action sur le Pokémon Défenseur.",
				de: "Choose 1 of your opponent's Pokémon. This attack doeas 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon."
			},

			damage: "30+"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Quand la nuit tombe, les anneaux de son corps se mettent à luire, éveillant la peur dans le cœur de ceux qui sont dans les parages."
	},

	thirdParty: {
		cardmarket: 274524,
		tcgplayer: 90137
	}
}

export default card
