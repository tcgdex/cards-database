import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [768],
	set: Set,

	name: {
		'en-us': "Golisopod ex",
		'fr-fr': "Sarmuraï-ex",
		'es-es': "Golisopod ex",
		'it-it': "Golisopod-ex",
		'pt-br': "Golisopod ex",
		'de-de': "Tectass-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Aqua Blade",
			'fr-fr': "Hydrolame",
			'es-es': "Hoja Agua",
			'it-it': "Idrolama",
			'pt-br': "Lâmina de Água",
			'de-de': "Aquaklinge"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Swing and Skedaddle",
			'fr-fr': "Coup et Fuite",
			'es-es': "Tajo y Huida",
			'it-it': "Stangata e Fuga",
			'pt-br': "Girar e Zarpar",
			'de-de': "Haudrauf und Reißaus"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l'un de vos Pokémon de Banc.",
			'es-es': "Descarta 1 Energía de este Pokémon. Si lo haces, cámbialo por uno de tus Pokémon en Banca.",
			'it-it': "Scarta un'Energia da questo Pokémon. Se lo fai, scambialo con uno della tua panchina.",
			'pt-br': "Descarte uma Energia deste Pokémon. Se fizer isto, troque-o por 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, tausche es gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740535,
				tcgplayer: 523660,
				cardtrader: 265116
			}
		},
	],

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

	
}

export default card
