import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Staravia",
		'fr-fr': "Étourvol d'Okuba",
		'es-es': "Staravia de Laureano",
		'es-mx': "Staravia de Laureano",
		'de-de': "Aokis Staravia",
		'it-it': "Staravia di Ubaldo",
		'pt-br': "Staravia do Lauro"
	},

	evolveFrom: {
		'en-us': "Larry's Starly",
		'fr-fr': "Étourmi d'Okuba",
		'es-es': "Starly de Laureano",
		'es-mx': "Starly de Laureano",
		'de-de': "Aokis Staralili",
		'it-it': "Starly di Ubaldo",
		'pt-br': "Starly do Lauro",
	},

	illustrator: "Fujimoto Gold",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'es-mx': "Aleteo",
			'de-de': "Flattern",
			'it-it': "Alabattito",
			'pt-br': "Asa"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'es-mx': "Ala Cortante",
			'de-de': "Rasierflügel",
			'it-it': "Ala Tagliente",
			'pt-br': "Asa Cortante"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "J",

	description: {
		'en-us': "They maintain huge flocks, although fierce scuffles break out between various flocks.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869780,
			tcgplayer: 675981
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870398,
			tcgplayer: 676983
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870397,
			tcgplayer: 677123
		}
	},
],
}

export default card