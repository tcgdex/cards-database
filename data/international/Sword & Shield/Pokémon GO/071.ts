import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Alolan Exeggutor V",
		'fr-fr': "Noadkoko d'Alola V",
		'es-es': "Exeggutor de Alola V",
		'it-it': "Exeggutor di Alola V",
		'pt-br': "Exeggutor de Alola V",
		'de-de': "Alola-Kokowei V"
	},

	illustrator: "MUGENUP",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Growing Tall",
			'fr-fr': "Allongement",
			'es-es': "Estirón",
			'it-it': "Allungamento",
			'pt-br': "Espichar",
			'de-de': "In die Höhe sprießen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, search your deck for up to 5 Grass Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 5 cartes Énergie Grass, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 5 cartas de Energía Grass y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a cinque carte Energia Grass e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, procure por até 5 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 5 Grass-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Head Swing",
			'fr-fr': "Tête Ballante",
			'es-es': "Sacudida de Cabeza",
			'it-it': "Oscillatesta",
			'pt-br': "Giro de Cabeça",
			'de-de': "Kopfschwung"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon for each Grass Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Grass attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Grass unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia Grass assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Grass ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Grass-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665683,
				tcgplayer: 277000
			}
		},
	],
}

export default card
