import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Solgaleo GX",
		'fr-fr': "Solgaleo GX",
		'es-es': "Solgaleo GX",
		'it-it': "Solgaleo GX",
		'pt-br': "Solgaleo GX",
		'de-de': "Solgaleo GX"
	},
	illustrator: "PLANETA",
	rarity: "Promo",
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
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},
	stage: "Stage2",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shining Mane",
				'fr-fr': "Crinière Étincelante",
				'es-es': "Melena Radiante",
				'it-it': "Criniera Lucente",
				'pt-br': "Juba Brilhante",
				'de-de': "Schimmernde Mähne"
			},
			effect: {
				'en-us': "Your Pokémon in play have no Weakness.",
				'fr-fr': "Vos Pokémon en jeu n’ont pas de Faiblesse.",
				'es-es': "Tus Pokémon en juego no tienen Debilidad.",
				'it-it': "I tuoi Pokémon in gioco non hanno debolezza.",
				'pt-br': "Seus Pokémon em jogo não têm Fraqueza.",
				'de-de': "Deine Pokémon im Spiel haben keine Schwäche."
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
				'en-us': "Turbo Strike",
				'fr-fr': "Frappe Turbo",
				'es-es': "Turbogolpe",
				'it-it': "Colpo Turbo",
				'pt-br': "Golpe Turbo",
				'de-de': "Turboschlag"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prominence GX",
				'fr-fr': "Proéminence GX",
				'es-es': "Prominencia GX",
				'it-it': "Statura GX",
				'pt-br': "Proeminência GX",
				'de-de': "Prominenz GX"
			},
			effect: {
				'en-us': "Heal all damage from all of your Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cura todos los puntos de daño a todos tus Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cura tutti i tuoi Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Cure todo o dano de todos os seus Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Heile allen Schaden bei jedem deiner Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
