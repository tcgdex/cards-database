import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		'en-us': "Steven's Skarmory",
		'fr-fr': "Airmure de Pierre",
		'de-de': "Troys Panzaeron",
		'it-it': "Skarmory di Rocco",
		'es-es': "Skarmory de Máximo",
		'pt-br': "Skarmory do Steven",
		'es-mx': "Skarmory de Steven"
	},


	illustrator: "Nisota Niso",

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'de-de': "Rasierflügel",
			'it-it': "Ala Tagliente",
			'es-es': "Ala Cortante",
			'pt-br': "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Sonic Double",
			'fr-fr': "Double Sonique",
			'de-de': "Doppelschall",
			'it-it': "Doppiosonico",
			'es-es': "Doble Sónico",
			'pt-br': "Dupla Sônica",
			'es-mx': "Doble Sónico"
		},

		effect: {
			'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826016,
				tcgplayer: 632949
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826016,
				tcgplayer: 632949
			}
		},
	],
}

export default card
