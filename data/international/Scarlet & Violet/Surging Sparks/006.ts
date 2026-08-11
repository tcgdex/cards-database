import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [665],
	set: Set,

	name: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug",
		'de-de': "Purmel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Wander About",
			'fr-fr': "Vagabondage",
			'es-es': "Deambular",
			'it-it': "Gironzolare",
			'pt-br': "Zanzar",
			'de-de': "Umherwandern"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794261,
				tcgplayer: 590061
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794261,
				tcgplayer: 590061
			}
		},
	],

	illustrator: "tono",
	
}

export default card
