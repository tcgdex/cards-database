import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Solgaleo-GX",
		fr: "Solgaleo-GX",
		es: "Solgaleo-GX",
		it: "Solgaleo-GX",
		pt: "Solgaleo-GX",
		de: "Solgaleo-GX"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 250,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shining Mane",
				fr: "Crinière Étincelante",
				es: "Melena Radiante",
				it: "Criniera Lucente",
				pt: "Juba Brilhante",
				de: "Schimmernde Mähne"
			},
			effect: {
				en: "Your Pokémon in play have no Weakness.",
				fr: "Vos Pokémon en jeu n’ont pas de Faiblesse.",
				es: "Tus Pokémon en juego no tienen Debilidad.",
				it: "I tuoi Pokémon in gioco non hanno debolezza.",
				pt: "Seus Pokémon em jogo não têm Fraqueza.",
				de: "Deine Pokémon im Spiel haben keine Schwäche."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turbo Strike",
				fr: "Frappe Turbo",
				es: "Turbogolpe",
				it: "Colpo Turbo",
				pt: "Golpe Turbo",
				de: "Turboschlag"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Prominence GX",
				fr: "Proéminence GX",
				es: "Prominencia GX",
				it: "Statura GX",
				pt: "Proeminência GX",
				de: "Prominenz GX"
			},
			effect: {
				en: "Heal all damage from all of your Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a todos tus Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura tutti i tuoi Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano de todos os seus Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei jedem deiner Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
