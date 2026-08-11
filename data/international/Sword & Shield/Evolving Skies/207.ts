import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Gyarados VMAX",
		'fr-fr': "Léviator VMAX",
		'es-es': "Gyarados VMAX",
		'it-it': "Gyarados VMAX",
		'pt-br': "Gyarados VMAX",
		'de-de': "Garados VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "Shin Nagasawa",
	dexId: [130],

	evolveFrom: {
		'en-us': "Gyarados V",
		'fr-fr': "Léviator-V",
		'es-es': "Gyarados V",
		'it-it': "Gyarados-V",
		'pt-br': "Gyarados V",
		'de-de': "Garados-V"
	},

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Hyper Beam",
			'fr-fr': "Ultralaser"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 120
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			'en-us': "Max Tyrant",
			'fr-fr': "Tyranomax"
		},

		damage: 240
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574265,
				tcgplayer: 246726
			}
		},
	],
}

export default card
