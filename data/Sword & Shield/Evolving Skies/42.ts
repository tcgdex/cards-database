import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Tympole",
		fr: "Tritonde",
		es: "Tympole",
		it: "Tympole",
		pt: "Tympole",
		de: "Schallquap"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Mina Nakai",

	attacks: [{
		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			it: "Fangosberla",
			pt: "Mud-Slap",
			de: "Lehmschelle"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "It uses sound waves to communicate with others of its kind. People and other Pokémon species can't hear its cries of warning."
	},

	dexId: [535],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574066
	}
}

export default card
