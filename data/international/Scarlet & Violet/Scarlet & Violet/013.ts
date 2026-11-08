import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha",
		'es-es': "Sprigatito",
		'it-it': "Sprigatito",
		'pt-br': "Sprigatito",
		'de-de': "Felori"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
	},

	thirdParty: {
        cardmarket: 689763,
        tcgplayer: 475417
    }
}

export default card