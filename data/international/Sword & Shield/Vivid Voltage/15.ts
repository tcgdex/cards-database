import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [492],

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Shibuzoh.",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'es-es': "Drenadoras",
				'it-it': "Parassiseme",
				'pt-br': "Semente Sanguessuga",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Flower Bearing",
				'fr-fr': "Source-Fleur",
				'es-es': "Portar las Flores",
				'it-it': "Originazione Fiori",
				'pt-br': "Safra das Flores",
				'de-de': "Blumenzucht"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards and puts them on the bottom of their deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire mélange son Pokémon Actif et toutes les cartes attachées, puis les place en dessous de son deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, tu rival baraja su Pokémon Activo y todas las cartas unidas a él y las pone en la parte inferior de su baraja.",
				'it-it': "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate e li mette in fondo al suo mazzo.",
				'pt-br': "Jogue 1 moeda. Se sair cara, seu oponente embaralhará o Pokémon Ativo dele(a) e todas as cartas ligadas a ele e os colocará como as cartas de baixo do baralho dele(a).",
				'de-de': "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon und alle angelegten Karten, und legt sie unter sein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511495,
				tcgplayer: 226379
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511495,
				tcgplayer: 226379
			}
		},
	],
}

export default card
