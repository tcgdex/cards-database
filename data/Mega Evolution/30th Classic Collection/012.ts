import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [243],

	name: {
		en: "Raikou",
		fr: "Raikou",
		de: "Raikou",
		es: "Raikou",
		it: "Raikou",
		pt: "Raikou",
		'es-mx': "Raikou"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Amazing Shot",
			fr: "Coup Magnifique",
			de: "Atemberaubender Schuss",
			es: "Disparo Increíble",
			it: "Colpo Policromo",
			pt: "Disparo Incrível",
			'es-mx': "Disparo Increíble"
		},

		effect: {
			en: "This attack also does 120 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>",
			it: "Questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Este ataque também causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente <em>(não aplique Fraqueza e Resistência aos Pokémon no Banco).</em>",
			'es-mx': "Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 120,
		cost: ["Grass", "Lightning", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907965,
				tcgplayer: 716192
			}
		}
	],
}

export default card
