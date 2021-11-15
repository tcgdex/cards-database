import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Marowak δ",
		fr: "Ossatueur δ ESPÈCES DELTA"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 80,
	types: [
		"Fighting",
		"Metal",
	],
	evolveFrom: {
		en: "Cubone",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Energy Bone",
				fr: "Énergie-os"
			},
			effect: {
				en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Marowak. This attack does 20 damage to each of them.",
				fr: "Vous pouvez choisir autant de Pokémon de votre adversaire qu'il y a d'Énergie attachée à Ossatueur. Cette attaque inflige 20 dégâts à chacun de ces Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Crusher",
				fr: "Écrase-métal"
			},
			effect: {
				en: "If the Defending Pokémon is Metal Pokémon, this attack's base damage is 90.",
				fr: "Si le Pokémon Défenseur est un Pokémon , les dégâts de base de cette attaque sont de 90."
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





}

export default card
