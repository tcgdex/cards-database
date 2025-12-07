import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [515],
	set: Set,

	name: {
		en: "Panpour",
		fr: "Flotajou",
		de: "Sodamak",
		it: "Panpour",
		pt: "Panpour",
		es: "Panpour",
		'es-mx': "Panpour"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			it: "Tassa",
			pt: "Coleta",
			es: "Coleccionar",
			'es-mx': "Recolectar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			es: "Roba 1 carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			pt: "Arranhão",
			es: "Arañazo",
			'es-mx': "Arañazo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835936
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835936
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836291
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836292
			}
		}
	],
}

export default card
