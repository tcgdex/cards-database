import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		de: "Papinella"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hunch",
				fr: "Bosse",
				de: "Hunch"
			},
			effect: {
				en: "As long as Beautifly's remaining HP is 40 or less, Beautifly does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant qu'il lui reste 40 Points de vie ou moins, Charmillon inflige 40 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				de: "As long as Beautifly's remaining HP is 40 or less, Beautifly does 40 more damage to the Defending Pokémon (before applying Weakness and resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Luring Antenna",
				fr: "Antenne trompeuse",
				de: "Luring Antenna"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Cette attaque inflige alors 20 dégâts au nouveau Pokémon Défenseur. Votre adversaire choisit le Pokémon de Banc à échanger.",
				de: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent choose the Defending Pokémon to switch."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent glacial",
				de: "Cutting Wind"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 83757,
		cardmarket: 276405
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
