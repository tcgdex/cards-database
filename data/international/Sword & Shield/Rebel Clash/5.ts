import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [213],

	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'es-es': "Shuckle",
		'it-it': "Shuckle",
		'pt-br': "Shuckle",
		'de-de': "Pottrott"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Berry Picking",
				'fr-fr': "Cueillette de Baies",
				'es-es': "Recogida de Bayas",
				'it-it': "Raccolta di Bacche",
				'pt-br': "Catando Frutas",
				'de-de': "Beerenpflücken"
			},
			effect: {
				'en-us': "Shuffle up to 5 basic Energy cards from your discard pile into your deck.",
				'fr-fr': "Mélangez avec votre deck jusqu'à 5 cartes Énergie de base de votre pile de défausse.",
				'es-es': "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe até 5 cartas de Energia básica da sua pilha de descarte no seu baralho.",
				'de-de': "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bind",
				'fr-fr': "Étreinte",
				'es-es': "Atadura",
				'it-it': "Legatutto",
				'pt-br': "Ligação",
				'de-de': "Klammergriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stores berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457403,
				tcgplayer: 213075
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457403,
				tcgplayer: 213075
			}
		},
	],
}

export default card
