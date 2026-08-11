import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'fr-fr': "Noadkoko d'Alola V",
		'de-de': "Alola-Kokowei V",
		'es-es': "Exeggutor de Alola V",
		'pt-br': "Exeggutor de Alola V",
		'it-it': "Exeggutor di Alola V",
		'en-us': "Alolan Exeggutor V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Allongement",
			'de-de': "In die Höhe sprießen",
			'es-es': "Estirón",
			'pt-br': "Espichar",
			'it-it': "Allungamento",
			'en-us': "Growing Tall"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 5 cartes Énergie {G}, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 5 {G}-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 5 cartas de Energía {G} y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'pt-br': "Jogue 1 moeda. Se sair cara, procure por até 5 cartas de Energia {G} no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a cinque carte Energia {G} e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Flip a coin. If heads, search your deck for up to 5 {G} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tête Ballante",
			'de-de': "Kopfschwung",
			'es-es': "Sacudida de Cabeza",
			'pt-br': "Giro de Cabeça",
			'it-it': "Oscillatesta",
			'en-us': "Head Swing"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie {G} attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía {G} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia {G} ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia {G} assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon for each {G} Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	thirdParty: {
		cardmarket: 653693
	}
}

export default card
