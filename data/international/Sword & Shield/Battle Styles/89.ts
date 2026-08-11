import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Hide in Shadows",
			'fr-fr': "Cachette d'Ombre",
			'es-es': "Ocultarse en las Sombras",
			'it-it': "Tanabuia",
			'pt-br': "Esconder nas Sombras",
			'de-de': "Schattenversteck"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Their skin is so thin that they'll be burned if sunlight hits them. When it gets cold out, they gather together to warm one another's bodies."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545536,
				tcgplayer: 234199
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545536,
				tcgplayer: 234199
			}
		},
	],
}

export default card
