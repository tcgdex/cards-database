import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Lotad",
		fr: "Nénupiot",
		es: "Lotad",
		'es-mx': "Lotad",
		de: "Loturzel",
		it: "Lotad",
		pt: "Lotad"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [270],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [270],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857580, 
	}
}

export default card