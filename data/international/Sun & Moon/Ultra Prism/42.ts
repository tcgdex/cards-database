import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'es-es': "Manaphy",
		'it-it': "Manaphy",
		'pt-br': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
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
				'en-us': "Deep Currents",
				'fr-fr': "Courants Profonds",
				'es-es': "Corrientes Profundas",
				'it-it': "Correnti Profonde",
				'pt-br': "Correntezas Profundas",
				'de-de': "Tiefe Strömung"
			},
			effect: {
				'en-us': "Shuffle 5 Water Energy cards from your discard pile into your deck.",
				'fr-fr': "Mélangez 5 cartes Énergie Water de votre pile de défausse avec votre deck.",
				'es-es': "Pon 5 cartas de Energía Water de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Rimischia cinque carte Energia Water dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 5 cartas de Energia Water da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 5 Water-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'es-es': "Hidropulso",
				'it-it': "Idropulsar",
				'pt-br': "Pulso d’Água",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 20,

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
		cardmarket: 315972,
		tcgplayer: 157659
	}
}

export default card
