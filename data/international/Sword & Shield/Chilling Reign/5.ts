import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [166],
	set: Set,

	name: {
		'en-us': "Ledian",
		'fr-fr': "Coxyclaque",
		'es-es': "Ledian",
		'it-it': "Ledian",
		'pt-br': "Ledian",
		'de-de': "Ledian"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy",
		'es-es': "Ledyba",
		'it-it': "Ledyba",
		'pt-br': "Ledyba",
		'de-de': "Ledyba"
	},

	attacks: [{
		name: {
			'en-us': "Rapid Draw",
			'fr-fr': "Pioche Rapide",
			'es-es': "Robo Rápido",
			'it-it': "Pescalesto",
			'pt-br': "Retirada Rápida",
			'de-de': "Schnellzieher"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'es-es': "Tajo Aéreo",
			'it-it': "Eterelama",
			'pt-br': "Golpe de Ar",
			'de-de': "Luftschnitt"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It flies through the night sky, sprinkling sparkly dust. According to some, if that dust sticks to you, good things will happen to you."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567085,
				tcgplayer: 241652
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567085,
				tcgplayer: 241652
			}
		},
	],
}

export default card
