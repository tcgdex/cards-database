import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Professor Turo's Scenario",
		fr: "Plan du Professeur Turum",
		es: "Plan del Profesor Turo",
		it: "Scenario del Professor Turum",
		pt: "Hipótese do Professor Turo",
		de: "Prof. Futurus' Szenario"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		en: "Put 1 of your Pokémon in play into your hand. (Discard all cards attached to that Pokémon.)",
		fr: "Ajoutez l'un de vos Pokémon en jeu à votre main. (Défaussez toutes les cartes attachées à ce Pokémon.)",
		es: "Pon 1 de tus Pokémon en juego en tu mano. (Descarta todas las cartas unidas a ese Pokémon).",
		it: "Riprendi in mano uno dei tuoi Pokémon in gioco. Scarta tutte le carte assegnate a quel Pokémon.",
		pt: "Coloque 1 dos seus Pokémon em jogo na sua mão. (Descarte todas as cartas ligadas àquele Pokémon.)",
		de: "Nimm 1 deiner Pokémon im Spiel auf deine Hand. (Lege alle an jenes Pokémon angelegten Karten auf deinen Ablagestapel.)"
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Atsushi Furusawa"
}

export default card