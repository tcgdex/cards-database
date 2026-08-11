import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Palkia GX",
		'fr-fr': "Palkia GX",
		'es-es': "Palkia GX",
		'it-it': "Palkia GX",
		'pt-br': "Palkia GX",
		'de-de': "Palkia GX"
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
				'en-us': "Spatial Control",
				'fr-fr': "Contrôle Spatial",
				'es-es': "Control Espacial",
				'it-it': "Controllo Spaziale",
				'pt-br': "Controle Espacial",
				'de-de': "Raumkontrolle"
			},
			effect: {
				'en-us': "Move any number of Energy from your Benched Pokémon to this Pokémon.",
				'fr-fr': "Déplacez autant d’Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
				'es-es': "Mueve cualquier cantidad de Energías de tus Pokémon en Banca a este Pokémon.",
				'it-it': "Sposta un numero qualsiasi di Energie dai tuoi Pokémon in panchina a questo Pokémon.",
				'pt-br': "Mova qualquer número de Energia dos seus Pokémon no Banco para este Pokémon.",
				'de-de': "Verschiebe beliebig viele Energien von den Pokémon auf deiner Bank auf dieses Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pressure",
				'fr-fr': "Pression Hydroélectrique",
				'es-es': "Presión Acuática",
				'it-it': "Pressione Idrica",
				'pt-br': "Hidropressão",
				'de-de': "Wasserkraft"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
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
				'en-us': "Zero Vanish GX",
				'fr-fr': "Zéro Disparaissant-GX",
				'es-es': "Fuga Cero GX",
				'it-it': "Zero Evanescente-GX",
				'pt-br': "Sumiço Total GX",
				'de-de': "Nullwert GX"
			},
			effect: {
				'en-us': "Shuffle all Energy from each of your opponent’s Pokémon into their deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez l’Énergie de chacun des Pokémon de votre adversaire dans son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon todas las Energías de cada uno de los Pokémon de tu rival en su baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Rimischia tutte le Energie assegnate a ciascuno dei Pokémon del tuo avversario nel suo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Embaralhe todas as Energias de cada um dos Pokémon do seu oponente no baralho dele(a) (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Mische alle Energien von jedem Pokémon deines Gegners in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 316027,
		tcgplayer: 157781
	}
}

export default card
