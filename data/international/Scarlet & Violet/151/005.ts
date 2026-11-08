import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		'fr-fr': "Reptincel",
		'en-us': "Charmeleon",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Salamèche",
		'en-us': "Charmander",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Fournaise",
			'en-us': "Combustion",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'fr-fr': "Déflagration",
			'en-us': "Fire Blast",
			'es-es': "Llamarada",
			'it-it': "Fuocobomba",
			'pt-br': "Rajada de Fogo",
			'de-de': "Feuersturm"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'en-us': "Discard an Energy from this Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733600,
				tcgplayer: 502557,
				cardtrader: 261162
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733600,
				tcgplayer: 502557,
				cardtrader: 261162
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 791828
			}
		},
	],

	illustrator: "GIDORA",

	
}

export default card
