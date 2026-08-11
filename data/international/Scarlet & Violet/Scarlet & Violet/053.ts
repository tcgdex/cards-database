import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [913],
	set: Set,

	name: {
		'en-us': "Quaxwell",
		'fr-fr': "Canarbello",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Quaxly",
		'fr-fr': "Coiffeton"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'es-es': "Patada Espiral",
			'it-it': "Spiralcalcio",
			'pt-br': "Chute Espiral",
			'de-de': "Drehtritt"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "kirisAki",

	description: {
		'en-us': "These Pokémon constantly run through shallow waters to train their legs, then compete with each other to see which of them kicks most gracefully.",
	},

	thirdParty: {
        cardmarket: 702347,
        tcgplayer: 487899
    }
}

export default card