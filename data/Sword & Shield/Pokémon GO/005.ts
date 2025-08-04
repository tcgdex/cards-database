import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor V",
		fr: "Noadkoko d'Alola V",
		es: "Exeggutor de Alola V",
		it: "Exeggutor di Alola V",
		pt: "Exeggutor de Alola V",
		de: "Alola-Kokowei V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Growing Tall",
			fr: "Allongement",
			es: "Estirón",
			it: "Allungamento",
			pt: "Espichar",
			de: "In die Höhe sprießen"
		},

		effect: {
			en: "Flip a coin. If heads, search your deck for up to 5 Grass Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck jusqu'à 5 cartes Énergie Grass, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja hasta 5 cartas de Energía Grass y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo fino a cinque carte Energia Grass e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue 1 moeda. Se sair cara, procure por até 5 cartas de Energia Grass no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach bis zu 5 Grass-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Head Swing",
			fr: "Tête Ballante",
			es: "Sacudida de Cabeza",
			it: "Oscillatesta",
			pt: "Giro de Cabeça",
			de: "Kopfschwung"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each Grass Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Grass attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Grass unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia Grass assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Grass ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Grass-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664541,
		tcgplayer: 276943
	}
}

export default card
