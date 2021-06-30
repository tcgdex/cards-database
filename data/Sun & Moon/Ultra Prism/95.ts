import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
		es: "Exeggutor de Alola",
		it: "Exeggutor di Alola",
		pt: "Exeggutor de Alola",
		de: "Alola-Kokowei"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 130,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Exeggutor’s Paradise",
				fr: "Paradis Noadkoko",
				es: "Paraíso de Exeggutor",
				it: "Paradiso degli Exeggutor",
				pt: "Paraíso de Exeggutor",
				de: "Kokoweis Paradies"
			},
			effect: {
				en: "For each of your Benched Exeggcute, search your deck for an Alolan Exeggutor or Alolan Exeggutor-GX and put it onto that Exeggcute to evolve it. Then, shuffle your deck.",
				fr: "Pour chacun des Noeunoeuf sur votre Banc, cherchez dans votre deck un Noadkoko d’Alola ou un Noadkoko d’Alola-GX et placez-le sur ce Noeunoeuf pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Por cada uno de tus Exeggcute en Banca, busca en tu baraja 1 Exeggutor de Alola o 1 Exeggutor de Alola-GX y ponlo en ese Exeggcute para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Per ogni Exeggcute nella tua panchina, cerca nel tuo mazzo un Exeggutor di Alola o un Exeggutor di Alola-GX e mettilo sopra quell’Exeggcute per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Para cada Exeggcute no seu Banco, procure por 1 Exeggutor de Alola ou Exeggutor de Alola-GX no seu baralho e coloque-o sobre aquele Exeggcute para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche für jedes Owei auf deiner Bank dein Deck nach 1 Alola-Kokowei oder Alola-Kokowei-GX und lege es auf jenes Owei, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Draco Meteor Barrage",
				fr: "Barrage de Draco Météore",
				es: "Bombardeo Cometa Draco",
				it: "Dragobolide a Catena",
				pt: "Barricada Meteoro do Dragão",
				de: "Draco-Meteor-Stakkato"
			},
			effect: {
				en: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Grass attachée à ce Pokémon. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda por cada Energía Grass unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni Energia Grass assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda para cada Energia Grass ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Grass-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

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
