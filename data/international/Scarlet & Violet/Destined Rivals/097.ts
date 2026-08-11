import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [299],
	set: Set,

	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'de-de': "Nasgnet",
		'it-it': "Nosepass",
		'es-es': "Nosepass",
		'pt-br': "Nosepass",
		'es-mx': "Nosepass"
	},


	illustrator: "Oku",

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'es-mx': "Golpe Cabeza"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'de-de': "Steinwurf",
			'it-it': "Sassata",
			'es-es': "Lanzarrocas",
			'pt-br': "Lançamento de Rocha",
			'es-mx': "Lanzarrocas"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825971,
				tcgplayer: 632905
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825971,
				tcgplayer: 632905
			}
		},
	],
}

export default card
