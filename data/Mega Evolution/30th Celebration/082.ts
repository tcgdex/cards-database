import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Groudon is said to have expanded the reach of dry land by evaporating water with raging heat. It battled ferociously against Kyogre."
	},

	name: {
		en: "Groudon",
		fr: "Groudon",
		de: "Groudon",
		es: "Groudon",
		it: "Groudon",
		'es-mx': "Groudon"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [383],
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Break Ground",
			fr: "Destructerre",
			de: "Boden gewinnen",
			es: "Romper Suelo",
			it: "Distruggiterra",
			'es-mx': "Rompesuelo"
		},

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca</em>).",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 250,
		cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907689,
				tcgplayer: 716478
			}
		}
	],
}

export default card