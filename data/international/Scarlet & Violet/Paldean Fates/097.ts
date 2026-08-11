import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [188],
	set: Set,

	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Drifting Dodge",
			'fr-fr': "Esquive Dérivante",
			'es-es': "Escape a la Deriva",
			'it-it': "Schivata Fluttuante",
			'pt-br': "Evasão à Deriva",
			'de-de': "Ausweichgleiter"
		},

		effect: {
			'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'it-it': "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano.",
			'de-de': "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Flowery Zephyr",
			'fr-fr': "Zéphyr Fleuri",
			'es-es': "Céfiro Floral",
			'it-it': "Zefiro Floreale",
			'pt-br': "Zéfiro Florido",
			'de-de': "Blumiger Zephir"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751636,
				tcgplayer: 534466,
				cardtrader: 274281
			}
		},
	],

	illustrator: "Mizue",

	description: {
		'en-us': "Skiploom enthusiasts can apparently tell where a Skiploom was born by the scent drifting from the flower on the Pokémon's head.",
	},

}

export default card
