import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		'es-mx': "Froakie",
		de: "Froxy",
		it: "Froakie",
		pt: "Froakie"
	},

	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [656],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			'es-mx': "Recolectar",
			de: "Sammeln",
			it: "Tassa",
			pt: "Coleta"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			pt: "Compre uma carta."
		}
	}, {
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			'es-mx': "Chorro de Agua",
			de: "Aquaknarre",
			it: "Pistolacqua",
			pt: "Revólver d'Água"
		},

		cost: ["Water"],
		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693488
	}
}

export default card