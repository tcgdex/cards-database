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

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869698,
			tcgplayer: 675899
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869698,
			tcgplayer: 675899
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870271,
			tcgplayer: 676920
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870272,
			tcgplayer: 677060
		}
	},
],
}

export default card