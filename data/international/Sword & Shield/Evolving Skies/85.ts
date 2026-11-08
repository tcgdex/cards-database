import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'it-it': "Hippowdon",
		'pt-br': "Hippowdon",
		'de-de': "Hippoterus"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",
	illustrator: "Eri Yamaki",

	attacks: [{
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Hammer In",
			'de-de': "Einhämmern"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}, {
		name: {
			'en-us': "Sand Press",
			'fr-fr': "Pression Sableuse",
			'es-es': "Presión de Arena",
			'it-it': "Silicopressa",
			'pt-br': "Sand Press",
			'de-de': "Sandpresse"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Discard 2 Energy from this Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 220,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	description: {
		'en-us': "When roused to violence by its rage, it spews out the quantities of sand it has swallowed and whips up a sandstorm."
	},

	dexId: [450],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574133,
				tcgplayer: 246880
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574133,
				tcgplayer: 246880
			}
		},
	],
}

export default card
