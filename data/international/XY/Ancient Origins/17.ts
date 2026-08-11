import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Solar Birth",
				'fr-fr': "Naissance Solaire",
				'es-es': "Nacimiento Solar",
				'it-it': "Solarnascita",
				'pt-br': "Nascimento Solar",
				'de-de': "Solargenese"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, search your deck for up to 2 basic Energy cards and attach them to that Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, cherchez jusqu'à 2 cartes Énergie de base dans votre deck et attachez-les au Pokémon choisi. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, busca en tu baraja hasta 2 cartas de Energía Básica y únelas a ese Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Quindi cerca nel tuo mazzo fino a due carte Energia base e assegnale a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho 1 Pokémon Básico e coloque-o no seu Banco. Em seguida, procure em seu baralho até 2 cards de Energia básica e ligue-os a aquele Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Durchsuche dein Deck anschließend nach bis zu 2 Basis-Energiekarten und lege sie an das Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-Chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun.",
	},

	thirdParty: {
		cardmarket: 284198,
		tcgplayer: 100622
	}
}

export default card
