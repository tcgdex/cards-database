import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Gyarados EX",
		fr: "Léviator EX",
		es: "Gyarados EX",
		it: "Gyarados EX",
		pt: "Gyarados EX",
		de: "Garados EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
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
				en: "Stormy Seas",
				fr: "Mers Orageuses",
				es: "Mares Tempestuosos",
				it: "Mari in Tempesta",
				pt: "Mares Tempestuosos",
				de: "Stürmische See"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, search your deck for a Water Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, busca en tu baraja 1 carta de Energía Water y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, cerca nel tuo mazzo una carta Energia Water e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue uma moeda até sair coroa. Para cada cara, procure em seu baralho um card de Energia Water e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis „Zahl“ kommt. Durchsuche pro „Kopf“ dein Deck nach 1 Water-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
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
				en: "Splash Burn",
				fr: "Éclaboussure Brûlante",
				es: "Quemadura Chapoteo",
				it: "Spruzzo Bollente",
				pt: "Queimada Borrifante",
				de: "Verbrühung"
			},
			effect: {
				en: "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 de danos a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
	stage: "Basic"
}

export default card
