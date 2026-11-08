import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lillie",
		'fr-fr': "Lilie",
		'es-es': "Lylia",
		'it-it': "Lylia",
		'de-de': "Lilly",
		'pt-br': "Lílian",
		'ko-kr': "릴리에"
	},

	illustrator: "hechima",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 60 damage from 1 of your Stage 2 Pokémon.",
		'fr-fr': "Soignez 60 dégâts d'un de vos Pokémon de Niveau 2.",
		'es-es': "Cura 60 puntos de daño a 1 de tus Pokémon de Fase[C:Nbsp ]2.",
		'it-it': "Cura uno dei tuoi Pokémon di Fase 2 da 60 danni.",
		'de-de': "Heile 60 Schadenspunkte bei 1 deiner Phase-2-Pokémon.",
		'pt-br': "Cure 60 pontos de dano de 1 dos seus Pokémon Estágio 2.",
		'ko-kr': "자신의 2진화 포켓몬 1마리의 HP를 60회복."
	},

	trainerType: "Supporter",
	boosters: ["solgaleo"]
}

export default card
