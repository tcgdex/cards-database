import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		fr: "Selutin",
		en: "Nacli",
		es: "Nacli",
		it: "Nacli",
		pt: "Nacli",
		de: "Geosali"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Coup d'Boule",
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "yuu",

	description: {
		en: "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},

	thirdParty: {
		cardmarket: 715595
	}
}

export default card