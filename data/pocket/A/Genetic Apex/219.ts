import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika",
		'fr-fr': "Erika",
		'es-es': "Erika",
		'it-it': "Erika",
		'de-de': "Erika",
		'pt-br': "Érica",
		'ko-kr': "민화"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'en-us': "Heal 50 damage from 1 of your {G} Pokémon.",
		'fr-fr': "Soignez 50 dégâts d'un de vos Pokémon {G}.",
		'es-es': "Cura 50 puntos de daño a 1 de tus Pokémon {G}.",
		'it-it': "Cura uno dei tuoi Pokémon {G} da 50 danni.",
		'de-de': "Heile 50 Schadenspunkte bei 1 deiner\n{G}-Pokémon.",
		'pt-br': "Cure 50 pontos de dano de 1 dos seus Pokémon {G}.",
		'ko-kr': "자신의 {G}포켓몬 1마리의 HP를 50회복."
	},

	trainerType: "Supporter",
	rarity: "Two Diamond",
	boosters: ["charizard"]
}

export default card
