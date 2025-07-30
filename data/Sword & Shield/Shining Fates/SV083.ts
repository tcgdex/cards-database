import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Grimalin",
		en: "Impidimp",
		es: "Impidimp",
		it: "Impidimp",
		pt: "Impidimp",
		de: "Bähmon"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Bataille",
			en: "Beat",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Through its nose, it sucks in the emanations produced by people and Pokémon when they feel annoyed. It thrives off this negative energy."
	},

	thirdParty: {
		cardmarket: 539803
	}
}

export default card