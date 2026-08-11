import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor Turo's Scenario",
		'fr-fr': "Plan du Professeur Turum",
		'es-es': "Plan del Profesor Turo",
		'pt-br': "Hipótese do Professor Turo",
		'it-it': "Scenario del Professor Turum",
		'de-de': "Prof. Futurus' Szenario"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put 1 of your Pokémon in play into your hand. (Discard all cards attached to that Pokémon.)",
		'fr-fr': "Ajoutez l'un de vos Pokémon en jeu à votre main. (Défaussez toutes les cartes attachées à ce Pokémon.)",
		'es-es': "Pon 1 de tus Pokémon en juego en tu mano. (Descarta todas las cartas unidas a ese Pokémon).",
		'pt-br': "Coloque 1 dos seus Pokémon em jogo na sua mão. (Descarte todas as cartas ligadas àquele Pokémon.)",
		'it-it': "Riprendi in mano uno dei tuoi Pokémon in gioco. Scarta tutte le carte assegnate a quel Pokémon.",
		'de-de': "Nimm 1 deiner Pokémon im Spiel auf deine Hand. (Lege alle an jenes Pokémon angelegten Karten auf deinen Ablagestapel.)"
	},

	trainerType: "Supporter",
	regulationMark: "G",
	illustrator: "hncl",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805515,
				tcgplayer: 610476
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805515,
				tcgplayer: 610476
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806592,
				tcgplayer: 610629
			}
		},
	],
}

export default card
