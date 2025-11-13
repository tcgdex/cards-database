import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		de: "Donphan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Flail"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Donphan.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Donphan.",
				de: "Does 10 damage times the number of damage counters on Donphan"
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide",
				de: "Rapid Spin"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Actif, ensuite, si vous avez des Pokémon sur votre Banc, vous choisissez l'un d'eux et l'échangez avec votre Pokémon Actif. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il possède des défenses aiguisées et une peau épaisse. Ses charges sont suffisamment puissantes pour abattre une maison."
	},

	thirdParty: {
		cardmarket: 274421,
		tcgplayer: 84872
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
