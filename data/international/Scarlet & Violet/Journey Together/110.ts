import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		'en-us': "Copperajah",
		'fr-fr': "Pachyradjah",
		'es-es': "Copperajah",
		'de-de': "Patinaraja",
		'it-it': "Copperajah",
		'pt-br': "Copperajah",
		'es-mx': "Copperajah"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'de-de': "Kupfanti",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'es-mx': "Cufant"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
		},

		damage: 100
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Impact",
			'fr-fr': "Méga Impact",
			'es-es': "Megaimpacto",
			'de-de': "Mega-Einschlag",
			'it-it': "Mega Impatto",
			'pt-br': "Mega-impacto",
			'es-mx': "Megaimpacto"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "H",
	illustrator: "Ryuta Fuse",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817262,
				tcgplayer: 623537
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817262,
				tcgplayer: 623537
			}
		},
	],
}

export default card
