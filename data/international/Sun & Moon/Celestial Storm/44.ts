import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'es-es': "Luvdisc",
		'it-it': "Luvdisc",
		'pt-br': "Luvdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		370,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Even Game",
				'fr-fr': "Partie Équilibrée",
				'es-es': "Partida Equilibrada",
				'it-it': "Partita alla Pari",
				'pt-br': "Partida Justa",
				'de-de': "Ausgeglichenes Spiel"
			},
			effect: {
				'en-us': "Search your deck for a number of Basic Pokémon up to the number of your opponent’s Benched Pokémon and put those Pokémon onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck un nombre de Pokémon de base inférieur ou égal au nombre de Pokémon de Banc de votre adversaire, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja un número de Pokémon Básicos hasta el número de los Pokémon en Banca de tu rival y pon esos Pokémon en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un numero di Pokémon Base uguale o inferiore al numero di Pokémon nella panchina del tuo avversario e metti quei Pokémon nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por um número de Pokémon Básicos no seu baralho até o número de Pokémon no Banco do seu oponente e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu so vielen Basis-Pokémon, wie dein Gegner Pokémon auf seiner Bank hat, und lege jene Pokémon auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
		'en-us': "Loving couples have a soft spot for this Pokémon, so honeymoon hotels often release this Pokémon into their pools.",
	},

	thirdParty: {
		cardmarket: 361291,
		tcgplayer: 170861
	}
}

export default card
