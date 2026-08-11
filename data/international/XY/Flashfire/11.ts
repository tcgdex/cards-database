import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Charizard EX",
		'fr-fr': "Dracaufeu EX",
		'es-es': "Charizard EX",
		'it-it': "Charizard EX",
		'pt-br': "Charizard EX",
		'de-de': "Glurak EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stoke",
				'fr-fr': "Attisement",
				'es-es': "Atizador",
				'it-it': "Attizzatoio",
				'pt-br': "Carregar",
				'de-de': "Anheizen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for up to 3 basic Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez jusqu'à 3 cartes Énergie de base dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 3 cartas de Energía Básica y únelas a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a tre carte Energia base e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue uma moeda. Se sair cara, procure em seu baralho até 3 cards de Energia básica e ligue-os a esse Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Wirf 1 Münze. Durchsuche bei \"Kopf\" dein Deck nach bis zu 3 Basis-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
				'es-es': "Llamarada",
				'it-it': "Fuocobomba",
				'pt-br': "Rajada de Fogo",
				'de-de': "Feuersturm"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281494,
		tcgplayer: 91144
	}
}

export default card
