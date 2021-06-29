import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie"
	},

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			es: "Rayo Aurora",
			it: "Raggiaurora",
			pt: "Raio Aurora",
			de: "Aurorastrahl"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card