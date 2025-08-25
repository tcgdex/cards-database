import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [299],
	set: Set,

	name: {
		en: "Nosepass",
		fr: "Tarinor",
		de: "Nasgnet",
		it: "Nosepass",
		es: "Nosepass",
		pt: "Nosepass",
		'es-mx': "Nosepass"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			it: "Bottintesta",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			'es-mx': "Golpe Cabeza"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			de: "Steinwurf",
			it: "Sassata",
			es: "Lanzarrocas",
			pt: "Lançamento de Rocha",
			'es-mx': "Lanzarrocas"
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
