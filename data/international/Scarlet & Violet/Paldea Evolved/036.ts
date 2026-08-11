import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		'fr-fr': "Crocogril",
		'en-us': "Crocalor",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Chochodile",
		'en-us': "Fuecoco",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Crachage de Feu Régulier",
			'en-us': "Steady Firebreathing",
			'es-es': "Lanzallamas Continuo",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante",
			'de-de': "Stetiger Feuerhauch"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Mégaphone",
			'en-us': "Hyper Voice",
			'es-es': "Vozarrón",
			'it-it': "Granvoce",
			'pt-br': "Hipervoz",
			'de-de': "Schallwelle"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715510,
				tcgplayer: 497447,
				cardtrader: 248624
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715510,
				tcgplayer: 497447,
				cardtrader: 248624
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	description: {
		'en-us': "The combination of Crocalor's fire energy and overflowing vitality has caused an egg-shaped fireball to appear on the Pokémon's head.",
	},
}

export default card
