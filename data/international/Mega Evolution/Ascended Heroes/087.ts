import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'es-mx': "Ralts",
		'de-de': "Trasla",
		'it-it': "Ralts",
		'pt-br': "Ralts"
	},

	illustrator: "Terada Tera",
	rarity: "Common",
	category: "Pokemon",
	dexId: [280],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'es-mx': "Recolectar",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada"
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

	description: {
		'en-us': "The horns on its head provide a strong power that enables it to sense people’s emotions.",
	},

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
		foil: "loveball",
		thirdParty: {
			cardmarket: 870272,
			tcgplayer: 676920
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870271,
			tcgplayer: 677060
		}
	},
],
}

export default card
