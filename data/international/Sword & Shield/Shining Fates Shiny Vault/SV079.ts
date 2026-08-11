import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		'fr-fr': "Linéon de Galar",
		'en-us': "Galarian Linoone",
		'es-es': "Linoone de Galar",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar",
		'de-de': "Galar-Geradaks"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Zigzaton de Galar",
		'en-us': "Galarian Zigzagoon"
	},

	attacks: [{
		name: {
			'fr-fr': "Tranche-Nuit",
			'en-us': "Night Slash",
			'es-es': "Tajo Umbrío",
			'it-it': "Nottesferza",
			'pt-br': "Talho Noturno",
			'de-de': "Nachthieb"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "This very aggressive Pokémon will recklessly challenge opponents stronger than itself."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539783,
				tcgplayer: 232456
			}
		},
	],
}

export default card
