import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor's Research",
		'fr-fr': "Recherches Professorales",
		'es-es': "Investigación de Profesores",
		'it-it': "Ricerca Accademica",
		'de-de': "Forschung des Professors",
		'pt-br': "Pesquisa de Professores",
		'ko-kr': "박사의 연구"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards.",
		'fr-fr': "Piochez 2 cartes.",
		'es-es': "Roba 2 cartas.",
		'it-it': "Pesca 2 carte.",
		'de-de': "Ziehe 2 Karten.",
		
		'ko-kr': "자신의 덱을 2장 뽑는다.",
		'pt-br': "Compre 2 cartas."
	},

	trainerType: "Supporter",
	boosters: []
}

export default card
