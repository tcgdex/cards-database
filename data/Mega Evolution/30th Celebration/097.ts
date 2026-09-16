import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Deino",
		fr: "Solochi",
		de: "Kapuno",
		es: "Deino",
		it: "Deino",
		'es-mx': "Deino"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			es: "Roer",
			it: "Rosicchiamento",
			'es-mx': "Mordisquear"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			'es-mx': "Golpe Cabeza"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card