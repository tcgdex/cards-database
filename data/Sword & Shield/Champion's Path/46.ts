import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [827],

	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Filch",
				fr: "Maraudage",
				es: "Birlar",
				it: "Furtarello",
				pt: "Furtar",
				de: "Mopsen"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre 1 carta.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
				es: "Bofetón Cola",
				it: "Codasberla",
				pt: "Ataque de Cauda",
				de: "Schweifschlag"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains."
	},

	thirdParty: {
		cardmarket: 500085
	}
}

export default card
