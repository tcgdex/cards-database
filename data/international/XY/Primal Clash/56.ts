import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'es-es': "Manaphy",
		'it-it': "Manaphy",
		'pt-br': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Deep Sea Swirl",
				'fr-fr': "Remous Abyssal",
				'es-es': "Remolino de Alta Mar",
				'it-it': "Vortice Abissale",
				'pt-br': "Giro em Mar Profundo",
				'de-de': "Tiefseewirbel"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca sei carte.",
				'pt-br': "Embaralhe a mão no seu baralho. Em seguida, compre 6 cards.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Life Saver",
				'fr-fr': "Sauvetage",
				'es-es': "Salvavidas",
				'it-it': "Salvagente",
				'pt-br': "Salva-vidas",
				'de-de': "Lebensretter"
			},
			effect: {
				'en-us': "Put 2 Water Pokémon from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 Pokémon Water de votre pile de défausse à votre main.",
				'es-es': "Pon 2 Pokémon Water de tu pila de descartes en tu mano.",
				'it-it': "Prendi due Pokémon Water dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
				'pt-br': "Coloque 2 Pokémon Water da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 2 Water-Pokémon von deinem Ablagestapel auf deine Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
	},

	thirdParty: {
		cardmarket: 273587,
		tcgplayer: 95954
	}
}

export default card
