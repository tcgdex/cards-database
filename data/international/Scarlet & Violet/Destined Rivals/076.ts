import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [310],
	set: Set,

	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'de-de': "Voltenso",
		'it-it': "Manectric",
		'es-es': "Manectric",
		'pt-br': "Manectric",
		'es-mx': "Manectric"
	},


	illustrator: "Izucch",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz",
		'it-it': "Electrike",
		'es-es': "Electrike",
		'pt-br': "Electrike",
		'es-mx': "Electrike"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur",
			'de-de': "Stromtritt",
			'it-it': "Dinamocalcio",
			'es-es': "Electropatada",
			'pt-br': "Chute Zap",
			'es-mx': "Electropatada"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Flash Impact",
			'fr-fr': "Impact-Flash",
			'de-de': "Blitzeinschlag",
			'it-it': "Impattoflash",
			'es-es': "Impacto Resplandor",
			'pt-br': "Impacto Lampejante",
			'es-mx': "Impacto Destello"
		},

		effect: {
			'en-us': "This attack also does 40 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 40 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge anche 40 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque también hace 40 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 40 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 40 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825950,
				tcgplayer: 632886
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825950,
				tcgplayer: 632886
			}
		},
	],
}

export default card
