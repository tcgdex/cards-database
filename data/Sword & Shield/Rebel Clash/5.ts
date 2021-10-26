import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		es: "Shuckle",
		it: "Shuckle",
		pt: "Shuckle",
		de: "Pottrott"
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
				en: "Berry Picking",
				fr: "Cueillette de Baies",
				es: "Recogida de Bayas",
				it: "Raccolta di Bacche",
				pt: "Catando Frutas",
				de: "Beerenpflücken"
			},
			effect: {
				en: "Shuffle up to 5 basic Energy cards from your discard pile into your deck.",
				fr: "Mélangez avec votre deck jusqu'à 5 cartes Énergie de base de votre pile de défausse.",
				es: "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
				it: "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe até 5 cartas de Energia básica da sua pilha de descarte no seu baralho.",
				de: "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
				es: "Atadura",
				it: "Legatutto",
				pt: "Ligação",
				de: "Klammergriff"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It stores berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still."
	}
}

export default card
