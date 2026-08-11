import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [323],
	set: Set,

	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camérupt",
		'es-es': "Camerupt",
		'it-it': "Camerupt",
		'pt-br': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "yuu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Split Bomb",
			'fr-fr': "Bombe Fendante",
			'es-es': "Bomba Separada",
			'it-it': "Squarciabomba",
			'pt-br': "Bomba Dividida",
			'de-de': "Splitterbombe"
		},

		effect: {
			'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "If angered, the humps on its back erupt in a shower of molten lava. It lives in the craters of volcanoes.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665658,
				tcgplayer: 276948
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665658,
				tcgplayer: 276948
			}
		},
	],
}

export default card
