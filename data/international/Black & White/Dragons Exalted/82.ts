import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'es-es': "Probopass",
		'it-it': "Probopass",
		'pt-br': "Probopass",
		'de-de': "Voluminas"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Lines",
				'fr-fr': "Lignes Magnétiques",
			},
			effect: {
				'en-us': "You may move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Nose",
				'fr-fr': "Pif Paf",
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It freely controls three small units called Mini-Noses using magnetic force.",
	},

	thirdParty: {
		cardmarket: 280521,
		tcgplayer: 88379
	}
}

export default card
