import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Palkia GX",
		fr: "Palkia GX",
		es: "Palkia GX",
		it: "Palkia GX",
		pt: "Palkia GX",
		de: "Palkia GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spatial Control",
				fr: "Contrôle Spatial",
				es: "Control Espacial",
				it: "Controllo Spaziale",
				pt: "Controle Espacial",
				de: "Raumkontrolle"
			},
			effect: {
				en: "Move any number of Energy from your Benched Pokémon to this Pokémon.",
				fr: "Déplacez autant d’Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
				es: "Mueve cualquier cantidad de Energías de tus Pokémon en Banca a este Pokémon.",
				it: "Sposta un numero qualsiasi di Energie dai tuoi Pokémon in panchina a questo Pokémon.",
				pt: "Mova qualquer número de Energia dos seus Pokémon no Banco para este Pokémon.",
				de: "Verschiebe beliebig viele Energien von den Pokémon auf deiner Bank auf dieses Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pressure",
				fr: "Pression Hydroélectrique",
				es: "Presión Acuática",
				it: "Pressione Idrica",
				pt: "Hidropressão",
				de: "Wasserkraft"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zero Vanish GX",
				fr: "Zéro Disparaissant-GX",
				es: "Fuga Cero GX",
				it: "Zero Evanescente-GX",
				pt: "Sumiço Total GX",
				de: "Nullwert GX"
			},
			effect: {
				en: "Shuffle all Energy from each of your opponent’s Pokémon into their deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Mélangez l’Énergie de chacun des Pokémon de votre adversaire dans son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon todas las Energías de cada uno de los Pokémon de tu rival en su baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Rimischia tutte le Energie assegnate a ciascuno dei Pokémon del tuo avversario nel suo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Embaralhe todas as Energias de cada um dos Pokémon do seu oponente no baralho dele(a) (você não pode usar mais de 1 ataque GX por partida).",
				de: "Mische alle Energien von jedem Pokémon deines Gegners in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
