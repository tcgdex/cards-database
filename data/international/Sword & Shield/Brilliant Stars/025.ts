import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [391],
	set: Set,

	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'pt-br': "Monferno",
		'de-de': "Panpyro"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'es-es': "Chimchar",
		'it-it': "Chimchar",
		'pt-br': "Chimchar",
		'de-de': "Panflam"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'it-it': "Lanciafiamme",
			'pt-br': "Lança-chamas",
			'de-de': "Flammenwurf"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608475,
				tcgplayer: 263724
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608475,
				tcgplayer: 263724
			}
		},
	],
}

export default card
