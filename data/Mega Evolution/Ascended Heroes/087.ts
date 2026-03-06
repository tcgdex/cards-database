import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		'es-mx': "Ralts",
		de: "Trasla",
		it: "Ralts",
		pt: "Ralts"
	},

	illustrator: "Terada Tera",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [280],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			'es-mx': "Recolectar",
			de: "Sammeln",
			it: "Tassa",
			pt: "Coleta"
		},

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
		cost: ["Psychic"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675899,
		cardmarket: 869698
	}
}

export default card