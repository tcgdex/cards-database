import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [907],
	set: Set,

	name: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'it-it': "Floragato",
		'pt-br': "Floragato",
		'de-de': "Feliospa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'de-de': "Blattschritt"
		},

		damage: 60
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
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Floragato deftly wields the vine hidden beneath its long fur, slamming the hard flower bud against its opponents.",
	},

	thirdParty: {
        cardmarket: 702310,
        tcgplayer: 487846
    }
}

export default card