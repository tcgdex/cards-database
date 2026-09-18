import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It runs as fast as lightning strikes, shredding its opponents with its high-voltage claws."
	},

	name: {
		en: "Zeraora",
		fr: "Zeraora",
		de: "Zeraora",
		es: "Zeraora",
		it: "Zeraora",
		'es-mx': "Zeraora"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [807],
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			de: "Schnellzieher",
			es: "Robo Rápido",
			it: "Pescalesto",
			'es-mx': "Robo Rápido"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Electrobullet",
			fr: "Électrojectile",
			de: "Elektrokugel",
			es: "Electrobala",
			it: "Elettrodardo",
			'es-mx': "Electrobala"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907664,
				tcgplayer: 696831
			}
		}
	],
}

export default card