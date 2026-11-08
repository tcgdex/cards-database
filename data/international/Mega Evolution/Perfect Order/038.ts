import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [476],

	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'es-es': "Probopass",
		'es-mx': "Probopass",
		'de-de': "Voluminas",
		'it-it': "Probopass",
		'pt-br': "Probopass"
	},

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'es-mx': "Nosepass",
		'de-de': "Nasgnet",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
	},

	illustrator: "Nurikabe",
	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Rolling Rocks",
			'fr-fr': "Rochers Roulants",
			'es-es': "Rocas Rodantes",
			'es-mx': "Rocas Rodantes",
			'de-de': "Rollende Steine",
			'it-it': "Massi Rotolanti",
			'pt-br': "Pedras Rolantes"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Obliterating Nose",
			'fr-fr': "Nez Destructeur",
			'es-es': "Nariz Destructora",
			'es-mx': "Nariz Destructora",
			'de-de': "Niederstreckende Nase",
			'it-it': "Naso Devastante",
			'pt-br': "Obliteração Nasal"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon."
		},

		damage: 260
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684423,
				cardmarket: 877452
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684423,
				cardmarket: 877452
			}
		}
	],

}

export default card
