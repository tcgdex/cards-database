import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		it: "Impidimp",
		pt: "Impidimp",
		de: "Bähmon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [859],
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				it: "Fuggi Fuggi",
				pt: "Estouro",
				de: "Zertrampeln"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Through its nose, it sucks in the emanations produced by people and Pokémon when they feel annoyed. It thrives off this negative energy."
	}
}

export default card
