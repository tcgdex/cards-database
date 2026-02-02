import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix",
		it: "Vulpix",
		es: "Vulpix",
		pt: "Vulpix",
		'es-mx': "Vulpix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [37],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			es: "Estampida",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			es: "Combustión",
			pt: "Combustão",
			'es-mx': "Combustión"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654358,
		cardmarket: 851090
	}
}

export default card