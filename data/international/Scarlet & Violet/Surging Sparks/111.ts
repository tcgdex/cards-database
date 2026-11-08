import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [766],
	set: Set,

	name: {
		'en-us': "Passimian",
		'fr-fr': "Quartermac",
		'es-es': "Passimian",
		'it-it': "Passimian",
		'pt-br': "Passimian",
		'de-de': "Quartermak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Coordinated Throwing",
			'fr-fr': "Lancer Coopération",
			'es-es': "Lanzamiento Coordinado",
			'it-it': "Tiro di Squadra",
			'pt-br': "Arremesso Coordenado",
			'de-de': "Koordiniertes Werfen"
		},

		effect: {
			'en-us': "This attack does 20 damage for each of your Basic Pokémon in play.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de base en jeu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon Básicos en juego.",
			'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon Base in gioco.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon Básicos em jogo.",
			'de-de': "Diese Attacke fügt für jedes deiner Basis-Pokémon im Spiel 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794442,
				tcgplayer: 590022
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794442,
				tcgplayer: 590022
			}
		},
	],

	illustrator: "Teeziro",

}

export default card
