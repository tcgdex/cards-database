import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
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
				en: "Exeggutor's Paradise",
				fr: "Paradis Noadkoko",
			},
			effect: {
				en: "For each of your Benched Exeggcute, search your deck for an Alolan Exeggutor or Alolan Exeggutor-GX and put it onto that Exeggcute to evolve it. Then, shuffle your deck.",
				fr: "Pour chacun des Noeunoeuf sur votre Banc, cherchez dans votre deck un Noadkoko d’Alola ou un Noadkoko d’Alola-GX et placez-le sur ce Noeunoeuf pour le faire évoluer. Mélangez ensuite votre deck.",
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
			},
			effect: {
				en: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Grass attachée à ce Pokémon. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 80,

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
