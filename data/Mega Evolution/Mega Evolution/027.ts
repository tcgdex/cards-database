import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Raboot",
		fr: "Lapyro",
		de: "Kickerlo",
		it: "Raboot",
		es: "Raboot",
		pt: "Raboot",
		'es-mx': "Raboot"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		en: "Scorbunny",
		fr: "Flambino",
		de: "Hopplo",
		it: "Scorbunny",
		es: "Scorbunny",
		pt: "Scorbunny",
		'es-mx': "Scorbunny"
	},
	stage: "Stage1",
	dexId: [814],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Jumping Kick",
			fr: "Coup Sauté",
			de: "Sprungtritt",
			it: "Calcio Aereo",
			es: "Patada Saltadora",
			pt: "Voadora",
			'es-mx': "Patada Voladora"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 40 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654366,
		cardmarket: 851098
	}
}

export default card