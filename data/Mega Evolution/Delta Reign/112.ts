import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		'es-mx': "Zorua"
	},

	illustrator: "GOSSAN",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 726564,
		cardmarket: 918950
	}
}

export default card