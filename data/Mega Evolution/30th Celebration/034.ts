import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu",
		pt: "Pikachu"
	},

	illustrator: "USGMEN",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pika Chain",
			fr: "Chaîne de Pika",
			de: "Pikakette",
			es: "Pika Cadena",
			it: "Pika Catena",
			'es-mx': "Pikalazo",
			pt: "Corrente Pikachu 40×"
		},

		effect: {
			en: "This attack does 40 damage for each of your Pikachu and Pikachu <em>ex</em> in play.",
			fr: "Cette attaque inflige 40 dégâts pour chacun de vos Pikachu et Pikachu-<em>ex</em> en jeu.",
			de: "Diese Attacke fügt für jedes deiner Pikachu und Pikachu-<em>ex</em> im Spiel 40 Schadenspunkte zu.",
			es: "Este ataque hace 40 puntos de daño por cada uno de tus Pikachu y Pikachu <em>ex</em> en juego.",
			it: "Questo attacco infligge 40 danni per ciascuno dei tuoi Pikachu e Pikachu-<em>ex</em> in gioco.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pikachu y Pikachu <em>ex</em> en juego.",
			pt: "Este ataque causa 40 pontos de dano para cada um dos seus Pikachu e Pikachu ex em jogo."
		},

		damage: "40×",
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907641,
				tcgplayer: 712941
			}
		}
	],
}

export default card
