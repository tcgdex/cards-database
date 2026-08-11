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

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",
	illustrator: "Shin Nagasawa",

	attacks: [{
		name: {
			'en-us': "Hyper Beam",
			'fr-fr': "Ultralaser",
			'es-es': "Hiperrayo",
			'it-it': "Iper Raggio",
			'pt-br': "Hyper Beam",
			'de-de': "Hyperstrahl"
		},

		effect: {
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Discard an Energy from your opponent's Active Pokémon.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			'en-us': "Max Tyrant",
			'fr-fr': "Tyranomax",
			'es-es': "Maxitiránico",
			'it-it': "Dynatiranno",
			'pt-br': "Max Tyrant",
			'de-de': "Dyna-Tyrann"
		},

		damage: 240,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		'en-us': "Gyarados V",
		'fr-fr': "Léviator-V",
		'es-es': "Gyarados V",
		'it-it': "Gyarados-V",
		'pt-br': "Gyarados V",
		'de-de': "Garados-V"
	},

	dexId: [130],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574053,
				tcgplayer: 246724
			}
		},
	],
}

export default card
