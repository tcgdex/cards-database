import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Potion",
		'fr-fr': "Potion",
		'es-es': "Poción",
		'it-it': "Pozione",
		'de-de': "Trank",
		'pt-br': "Poção",
		'ko-kr': "상처약"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",

	effect: {
		'en-us': "Heal 20 damage from 1 of your Pokémon.",
		'fr-fr': "Soignez 20 dégâts d'un de vos Pokémon.",
		'es-es': "Cura 20 puntos de daño a 1 de tus Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon da 20 danni.",
		'de-de': "Heile 20 Schadenspunkte bei 1 deiner Pokémon.",
		'pt-br': "Cure 20 pontos de dano de 1 dos seus Pokémon.",
		'ko-kr': "자신의 포켓몬 1마리의 HP를 20회복."
	},

	trainerType: "Item",
	boosters: []
}

export default card
