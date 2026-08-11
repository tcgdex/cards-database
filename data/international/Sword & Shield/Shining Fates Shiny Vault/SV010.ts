import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [829],
	set: Set,

	name: {
		'fr-fr': "Tournicoton",
		'en-us': "Gossifleur",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Appel à la Famille",
			'en-us': "Call for Family",
			'es-es': "Llamar a la Familia",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'de-de': "Familienruf"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Tranch'Herbe",
			'en-us': "Razor Leaf",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539438,
				tcgplayer: 232356
			}
		},
	],
}

export default card
