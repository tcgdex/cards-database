import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wagomine",
		en: "Carkol",
		es: "Carkol",
		it: "Carkol",
		pt: "Carkol",
		de: "Wagong"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Charbi",
		en: "Rolycoly"
	},

	attacks: [{
		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Tacle Feu",
			en: "Heat Crash",
			es: "Golpe Calor",
			it: "Marchiafuoco",
			pt: "Choque de Calor",
			de: "Brandstempel"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "It forms coal inside its body. Coal dropped by this Pokémon once helped fuel the lives of people in the Galar region."
	},

	thirdParty: {
		cardmarket: 539728
	}
}

export default card