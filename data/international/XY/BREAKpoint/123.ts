import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Gyarados EX",
		'fr-fr': "Léviator EX",
		'es-es': "Gyarados EX",
		'it-it': "Gyarados EX",
		'pt-br': "Gyarados EX",
		'de-de': "Garados EX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stormy Seas",
				'fr-fr': "Mers Orageuses",
				'es-es': "Mares Tempestuosos",
				'it-it': "Mari in Tempesta",
				'pt-br': "Mares Tempestuosos",
				'de-de': "Stürmische See"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, search your deck for a Water Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, procure em seu baralho um card de Energia Water e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Durchsuche pro \"Kopf\" dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Splash Burn",
				'fr-fr': "Éclaboussure Brûlante",
				'es-es': "Quemadura Chapoteo",
				'it-it': "Spruzzo Bollente",
				'pt-br': "Queimada Borrifante",
				'de-de': "Verbrühung"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 de danos a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	retreat: 4,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288298,
		tcgplayer: 111531
	}
}

export default card
