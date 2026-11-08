import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Ribombee",
		'fr-fr': "Rubombelle",
		'es-es': "Ribombee",
		'it-it': "Ribombee",
		'pt-br': "Ribombee",
		'de-de': "Bandelby"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",
	illustrator: "Saya Tsuruta",

	attacks: [{
		name: {
			'en-us': "Tricky Steps",
			'fr-fr': "Pas Délicats",
			'es-es': "Pasos Astutos",
			'it-it': "Passinganno",
			'pt-br': "Tricky Steps",
			'de-de': "Listiges Vorgehen"
		},

		effect: {
			'en-us': "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			'fr-fr': "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			'es-es': "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
			'it-it': "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			'pt-br': "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			'de-de': "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,

	evolveFrom: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
		'es-es': "Cutiefly",
		'it-it': "Cutiefly",
		'pt-br': "Cutiefly",
		'de-de': "Wommel"
	},

	description: {
		'en-us': "Ribombee absolutely hate getting wet or rained on. In the cloudy Galar region, they are very seldom seen."
	},

	dexId: [743],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574127,
				tcgplayer: 246864
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574127,
				tcgplayer: 246864
			}
		},
	],
}

export default card
