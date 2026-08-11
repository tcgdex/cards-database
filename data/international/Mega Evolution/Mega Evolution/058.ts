import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla",
		'it-it': "Ralts",
		'es-es': "Ralts",
		'pt-br': "Ralts",
		'es-mx': "Ralts"
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
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'es-es': "Coleccionar",
			'pt-br': "Coleta",
			'es-mx': "Recolectar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'es-mx': "Golpe Cabeza"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851129,
				tcgplayer: 654397
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851129,
				tcgplayer: 654397
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 862193,
			}
		},
	],
}

export default card
