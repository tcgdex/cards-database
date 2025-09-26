import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Nincada",
		fr: "Ningale",
		de: "Nincada",
		it: "Nincada",
		es: "Nincada",
		pt: "Nincada",
		'es-mx': "Nincada"
	},

	illustrator: "Kuroimori",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654355
	}
}

export default card