import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		es: "Luvdisc",
		it: "Luvdisc",
		pt: "Luvdisc",
		de: "Liebiskus"
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
				en: "Even Game",
				fr: "Partie Équilibrée",
				es: "Partida Equilibrada",
				it: "Partita alla Pari",
				pt: "Partida Justa",
				de: "Ausgeglichenes Spiel"
			},
			effect: {
				en: "Search your deck for a number of Basic Pokémon up to the number of your opponent’s Benched Pokémon and put those Pokémon onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck un nombre de Pokémon de base inférieur ou égal au nombre de Pokémon de Banc de votre adversaire, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja un número de Pokémon Básicos hasta el número de los Pokémon en Banca de tu rival y pon esos Pokémon en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un numero di Pokémon Base uguale o inferiore al numero di Pokémon nella panchina del tuo avversario e metti quei Pokémon nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por um número de Pokémon Básicos no seu baralho até o número de Pokémon no Banco do seu oponente e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu so vielen Basis-Pokémon, wie dein Gegner Pokémon auf seiner Bank hat, und lege jene Pokémon auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d’Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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



}

export default card
