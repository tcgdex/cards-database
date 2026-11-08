import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [324],
	set: Set,

	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'de-de': "Qurtel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

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

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674034,
				tcgplayer: 283894
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674034,
				tcgplayer: 283894
			}
		},
	],
}

export default card
