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
		'es-mx': "Pikachu"
	},

	illustrator: "satoma",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Spark",
			fr: "Étincelle",
			de: "Funkensprung",
			es: "Chispa",
			it: "Scintilla",
			'es-mx': "Chispa"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
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
			thirdParty: {
				cardmarket: 907632,
				tcgplayer: 712935
			}
		}
	],
}

export default card