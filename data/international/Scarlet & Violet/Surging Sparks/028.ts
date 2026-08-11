import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Billowing Heat Wave",
			'fr-fr': "Volutes Canicule",
			'es-es': "Onda Ígnea Sinuosa",
			'it-it': "Ondacalda Fluttuante",
			'pt-br': "Mormaço Envolvente",
			'de-de': "Wabernde Hitzewelle"
		},

		effect: {
			'en-us': "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794283,
				tcgplayer: 589889
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794283,
				tcgplayer: 589889
			}
		},
	],

	illustrator: "Aliya Chen",
	
}

export default card
