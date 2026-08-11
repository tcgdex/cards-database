import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Bewear GX",
		'fr-fr': "Chelours GX",
		'es-es': "Bewear GX",
		'it-it': "Bewear GX",
		'pt-br': "Bewear GX",
		'de-de': "Kosturso GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bear Hug",
				'fr-fr': "Câlin d’Ours",
				'es-es': "Abrazo de Oso",
				'it-it': "Presa dell’Orso",
				'pt-br': "Abraço de Urso",
				'de-de': "Dicke Umarmung"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Impact",
				'fr-fr': "Double Impact",
				'es-es': "Impacto Doble",
				'it-it': "Doppio Impatto",
				'pt-br': "Impacto Duplo",
				'de-de': "Doppelter Einschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
			},
			damage: "100×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Throw GX",
				'fr-fr': "Grand Lancer GX",
				'es-es': "Gran Lanzamiento GX",
				'it-it': "Gran Lancio GX",
				'pt-br': "Arremessão GX",
				'de-de': "Großer Wurf GX"
			},
			effect: {
				'en-us': "Discard your opponent’s Active Pokémon and all cards attached to it. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta el Pokémon Activo de tu rival y todas las cartas unidas a él. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege das Aktive Pokémon deines Gegners und alle an es angelegten Karten auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
