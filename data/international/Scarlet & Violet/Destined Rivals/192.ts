import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [257],
	set: Set,

	name: {
		'en-us': "Blaziken",
		'fr-fr': "Braségali",
		'de-de': "Lohgock",
		'it-it': "Blaziken",
		'es-es': "Blaziken",
		'pt-br': "Blaziken",
		'es-mx': "Blaziken"
	},


	illustrator: "kodama",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'de-de': "Jungglut",
		'it-it': "Combusken",
		'es-es': "Combusken",
		'pt-br': "Combusken",
		'es-mx': "Combusken"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'de-de': "Hitzestoß",
			'it-it': "Caldobomba",
			'es-es': "Explosión de Calor",
			'pt-br': "Raio de Calor",
			'es-mx': "Explosión Ígnea"
		},

		damage: 70
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Inferno Kick Flurry",
			'fr-fr': "Rafale de Coups de Pied Infernale",
			'de-de': "Inferno-Trittschauer",
			'it-it': "Calcioturbine Infernale",
			'es-es': "Ráfaga de Patadas Infernales",
			'pt-br': "Enxurrada de Chutes Infernais",
			'es-mx': "Ráfaga de Piropatadas"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. This attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige aussi 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta due Energie da questo Pokémon. Questo attacco infligge anche 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Descarta 2 Energías de este Pokémon. Este ataque también hace 120 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Descarte 2 Energias deste Pokémon. Este ataque também causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta 2 Energías de este Pokémon. Este ataque también hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826066,
				tcgplayer: 632992
			}
		},
	],
}

export default card
