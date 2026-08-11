import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Melony",
		'fr-fr': "Lona",
		'es-es': "Mel",
		'it-it': "Melania",
		'pt-br': "Melony",
		'de-de': "Mel"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Attach a Water Energy card from your discard pile to 1 of your Pokémon V. If you do, draw 3 cards.",
		'fr-fr': "Attachez une carte Énergie Water de votre pile de défausse à l'un de vos Pokémon-V. Dans ce cas, piochez 3 cartes.",
		'es-es': "Une 1 carta de Energía Water de tu pila de descartes a 1 de tus Pokémon V. Si lo haces, roba 3 cartas.",
		'it-it': "Assegna una carta Energia Water dalla tua pila degli scarti a uno dei tuoi Pokémon-V. Se lo fai, pesca tre carte.",
		'pt-br': "Ligue 1 carta de Energia Water da sua pilha de descarte a 1 dos seus Pokémon V. Se fizer isto, compre 3 cartas.",
		'de-de': "Lege 1 Water-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon-V an. Wenn du das machst, ziehe 3 Karten."
	},

	trainerType: "Supporter",


	illustrator: "Taira Akitsu",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567326,
				tcgplayer: 241849
			}
		},
	],
}

export default card
