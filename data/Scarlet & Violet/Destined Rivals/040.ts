import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli",
		it: "Torchic",
		es: "Torchic",
		pt: "Torchic",
		'es-mx': "Torchic"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			it: "Tassa",
			es: "Coleccionar",
			pt: "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			es: "Roba 1 carta.",
			pt: "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			de: "Glühen",
			it: "Fuoco Continuo",
			es: "Combustión",
			pt: "Combustão",
			'es-mx': "Combustión"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825914
	}
}

export default card
