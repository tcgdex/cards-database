import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [492],

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		de: "Shaymin"
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
				en: "Leech Seed",
				fr: "Vampigraine",
				es: "Drenadoras",
				it: "Parassiseme",
				pt: "Semente Sanguessuga",
				de: "Egelsamen"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts de ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Bearing",
				fr: "Source-Fleur",
				es: "Portar las Flores",
				it: "Originazione Fiori",
				pt: "Safra das Flores",
				de: "Blumenzucht"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards and puts them on the bottom of their deck.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire mélange son Pokémon Actif et toutes les cartes attachées, puis les place en dessous de son deck.",
				es: "Lanza 1 moneda. Si sale cara, tu rival baraja su Pokémon Activo y todas las cartas unidas a él y las pone en la parte inferior de su baraja.",
				it: "Lancia una moneta. Se esce testa, il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate e li mette in fondo al suo mazzo.",
				pt: "Jogue 1 moeda. Se sair cara, seu oponente embaralhará o Pokémon Ativo dele(a) e todas as cartas ligadas a ele e os colocará como as cartas de baixo do baralho dele(a).",
				de: "Wirf 1 Münze. Bei Kopf mischt dein Gegner sein Aktives Pokémon und alle angelegten Karten, und legt sie unter sein Deck."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers."
	},

	thirdParty: {
		cardmarket: 511495
	}
}

export default card
