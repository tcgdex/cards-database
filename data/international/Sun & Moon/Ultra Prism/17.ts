import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Water Bubble",
				'fr-fr': "Aquabulle",
				'es-es': "Pompa",
				'it-it': "Bolladacqua",
				'pt-br': "Bolha de Água",
				'de-de': "Wasserblase"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent’s Fire Pokémon.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Fire de tu rival.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Fire del tuo avversario.",
				'pt-br': "Previne todo o dano causado a este Pokémon por ataques dos Pokémon Fire do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Fire-Pokémon deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Edge",
				'fr-fr': "Aqua-Dague",
				'es-es': "Filo Agua",
				'it-it': "Acquataglio",
				'pt-br': "Aqua Gume",
				'de-de': "Aquaschneide"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It delivers headbutts with the water bubble on its head. Small Pokémon get sucked into the bubble, where they drown.",
	},

	thirdParty: {
		cardmarket: 315948,
		tcgplayer: 157634
	}
}

export default card
