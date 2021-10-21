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
		en: "Bagon",
		fr: "Draby",
		es: "Bagon",
		it: "Bagon",
		pt: "Bagon",
		de: "Kindwurm"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "ryoma uratsuka",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Gnaw",
			de: "Nagen"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Headbutt",
			de: "Kopfnuss"
		},

		damage: 30,
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	dexId: [371],

	description: {
		en: "Some theories suggest that its behavior of forcefully bashing its head into things stimulates cells that affect its evolution."
	},

	regulationMark: "E"
}

export default card
