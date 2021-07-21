import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Tornadus-GX",
		fr: "Boréas-GX",
		es: "Tornadus-GX",
		it: "Tornadus-GX",
		pt: "Tornadus-GX",
		de: "Boreos-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		641,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Fury",
				fr: "Furie Sauvage",
				es: "Furia Salvaje",
				it: "Urtoferoce",
				pt: "Fúria Selvagem",
				de: "Wilde Wut"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "90+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Cyclone GX",
				fr: "Cyclone Destructeur GX",
				es: "Ciclón Destructivo GX",
				it: "Ciclone Distruttivo GX",
				pt: "Ciclone Destruidor GX",
				de: "Zerstörerisches Sturmtief GX"
			},
			effect: {
				en: "Discard all Energy from your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta todas las Energías del Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta tutte le Energie assegnate al Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte todas as Energias do Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege alle Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
