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
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas",
		de: "Hippopotas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Tackle",
			de: "Tackle"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Mud Shot",
			de: "Lehmschuss"
		},

		damage: 50,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	description: {
		en: "This Pokémon is active during the day and passes the cold desert nights burrowed snugly into the sand."
	},

	dexId: [449],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574132,
		tcgplayer: 246878
	}
}

export default card