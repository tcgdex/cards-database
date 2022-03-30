import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Grace",
				fr: "Prodige d'Énergie",
				es: "Gracia de Energía",
				it: "Energigrazia",
				pt: "Indulgência de Energia",
				de: "Energienachschlag"
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, attach 3 basic Energy cards from your discard pile to 1 of your Pokémon (excluding Pokémon-EX).",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre ce Pokémon K.O. Dans ce cas, attachez 3 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon (excepté les Pokémon-EX).",
				es: "Una vez durante tu turno (antes de tu ataque), puedes dejar Fuera de Combate a este Pokémon. Si lo haces, une 3 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon (excluidos los Pokémon-EX).",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere KO questo Pokémon. Se lo fai, assegna a uno dei tuoi Pokémon (esclusi i Pokémon-EX) tre carte Energia base dalla tua pila degli scarti.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode Nocautear este Pokémon. Se fizer isso, ligue 3 cards de Energia básica da sua pilha de descarte a 1 dos seus Pokémon (não inclui Pokémon-EX).",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon kampfunfähig machen. Wenn du das machst, lege 3 Basis-Energiekarten von deinem Ablagestapel an 1 deiner Pokémon an (außer Pokémon-EX)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				es: "Cascada",
				it: "Cascata",
				pt: "Cachoeira",
				de: "Kaskade"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
