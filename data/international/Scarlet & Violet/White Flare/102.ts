import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [608],
	set: Set,

	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'de-de': "Laternecto",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'es-es': "Lampent",
		'es-mx': "Lampent"
	},

	illustrator: "Ligton",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'de-de': "Lichtel",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'es-es': "Litwick",
		'es-mx': "Litwick"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fire Blast",
			'fr-fr': "Déflagration",
			'de-de': "Feuersturm",
			'it-it': "Fuocobomba",
			'pt-br': "Rajada de Fogo",
			'es-es': "Llamarada",
			'es-mx': "Llamarada"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836097,
				tcgplayer: 642550
			}
		},
	],
}

export default card
