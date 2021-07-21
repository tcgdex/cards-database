import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Purugly",
		fr: "Chaffreux",
		es: "Purugly",
		it: "Purugly",
		pt: "Purugly",
		de: "Shnurgarst"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		432,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stray Cat Dash",
				fr: "Fuite du Chat Perdu",
				es: "Carrera Gato Callejero",
				it: "Corsa Randagia",
				pt: "Gato de Rua Veloz",
				de: "Streunerspurt"
			},
			effect: {
				en: "Discard a random card from your opponent’s hand. If this Pokémon evolved from Glameow during this turn, discard 2 cards instead of 1.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire. Si ce Pokémon a évolué de Chaglam pendant ce tour, défaussez 2 cartes au lieu d’une.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival. Si este Pokémon ha evolucionado de Glameow durante este turno, descarta 2 cartas en vez de 1.",
				it: "Scarta una carta a caso dalla mano del tuo avversario. Se questo Pokémon si è evoluto da Glameow durante questo turno, scarta due carte invece di una.",
				pt: "Descarte 1 carta aleatória da mão do seu oponente. Se este Pokémon evoluiu de Glameow durante esta vez de jogar, descarte 2 cartas ao invés de 1.",
				de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges aus Charmian entwickelt hat, lege 2 Karten anstelle von 1 Karte auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunge Out",
				fr: "Allonger",
				es: "Arremeter",
				it: "Affondo Lungo",
				pt: "Bote",
				de: "Sprungangriff"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
