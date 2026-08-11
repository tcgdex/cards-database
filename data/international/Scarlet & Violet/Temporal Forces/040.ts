import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [159],
	set: Set,

	name: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'it-it': "Totodile",
		'pt-br': "Totodile",
		'de-de': "Karnimani"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Reverse Thrust",
			'fr-fr': "Poussée Inverse",
			'es-es': "Invertir Impulso",
			'it-it': "Tornaindietro",
			'pt-br': "Impulso Reverso",
			'de-de': "Umkehrschub"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760670,
				tcgplayer: 542784
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760670,
				tcgplayer: 542784
			}
		},
	],

	illustrator: "Jerky",

}

export default card