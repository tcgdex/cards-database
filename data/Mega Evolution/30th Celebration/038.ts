import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Targeted Spark",
			fr: "Étincelle Ciblée",
			de: "Gezielter Funke",
			es: "Chispa Direccionada",
			it: "Scintilla Mirata",
			'es-mx': "Chispa Precisa"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card