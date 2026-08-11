import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beedrill ex",
		'fr-fr': "Dardargnan-ex",
		'es-es': "Beedrill ex",
		'es-mx': "Beedrill ex",
		'de-de': "Bibor-ex",
		'it-it': "Beedrill-ex",
		'pt-br': "Beedrill ex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [15],
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Kakuna"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Rumbling Bees",
			'fr-fr': "Abeilles Vrombissantes",
			'es-es': "Abejas Ruidosas",
			'es-mx': "Abejas Ruidosas",
			'de-de': "Bienenbande",
			'it-it': "Api Rombanti",
			'pt-br': "Abelhas Furiosas"
		},

		cost: ["Grass"],
		damage: "110×",

		effect: {
			'en-us': "This attack does 110 damage for each of your Beedrill and Beedrill ex in play.",
			'fr-fr': "Cette attaque inflige 110 dégâts pour chacun de vos Dardargnan et Dardargnan-ex en jeu.",
			'es-es': "Este ataque hace 110 puntos de daño por cada uno de tus Beedrill y Beedrill ex en juego.",
			'es-mx': "Este ataque hace 110 puntos de daño por cada uno de tus Beedrill y Beedrill ex en juego.",
			'de-de': "Diese Attacke fügt für jedes deiner Bibor und Bibor-ex im Spiel 110 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 110 danni per ciascuno dei tuoi Beedrill e Beedrill-ex in gioco.",
			'pt-br': "Este ataque causa 110 pontos de dano para cada um dos seus Beedrill e Beedrill ex em jogo."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886395,
				tcgplayer: 693453
			}
		},
	],
}

export default card
