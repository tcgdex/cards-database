import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Primarina GX",
		'fr-fr': "Oratoria GX",
		'es-es': "Primarina GX",
		'it-it': "Primarina GX",
		'pt-br': "Primarina GX",
		'de-de': "Primarene GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		730,
	],
	hp: 250,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Brionne",
		'fr-fr': "Otarlette",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Beat",
				'fr-fr': "Bulle Bataille",
				'es-es': "Golpe Burbuja",
				'it-it': "Bollabotta",
				'pt-br': "Batida de Bolha",
				'de-de': "Blasenbeat"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Water Energy attached to your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada aos seus Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an deine Pokémon angelegten Water-Energien zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Roaring Seas",
				'fr-fr': "Flots Rugissants",
				'es-es': "Mares Rugientes",
				'it-it': "Mari Ruggenti",
				'pt-br': "Oceanos Estrondosos",
				'de-de': "Brausendes Meer"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Grand Echo GX",
				'fr-fr': "Écho Majestueux GX",
				'es-es': "Gran Eco GX",
				'it-it': "Eco Formidabile GX",
				'pt-br': "Eco Grandioso GX",
				'de-de': "Gewaltiges Echo GX"
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
