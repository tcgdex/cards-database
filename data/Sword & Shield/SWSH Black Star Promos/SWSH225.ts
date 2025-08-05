import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Noadkoko d'Alola V",
		de: "Alola-Kokowei V",
		es: "Exeggutor de Alola V",
		pt: "Exeggutor de Alola V",
		it: "Exeggutor di Alola V",
		en: "Alolan Exeggutor V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Allongement",
			de: "In die Höhe sprießen",
			es: "Estirón",
			pt: "Espichar",
			it: "Allungamento",
			en: "Growing Tall"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 5 cartes Énergie {G}, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 5 {G}-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 5 cartas de Energía {G} y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			pt: "Jogue 1 moeda. Se sair cara, procure por até 5 cartas de Energia {G} no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a cinque carte Energia {G} e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			en: "Flip a coin. If heads, search your deck for up to 5 {G} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Tête Ballante",
			de: "Kopfschwung",
			es: "Sacudida de Cabeza",
			pt: "Giro de Cabeça",
			it: "Oscillatesta",
			en: "Head Swing"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie {G} attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía {G} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia {G} ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia {G} assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each {G} Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	retreat: 3,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 653693
	}
}

export default card