import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [188],
	set: Set,

	name: {
		'fr-fr': "Floravol",
		'en-us': "Skiploom",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Granivol",
		'en-us': "Hoppip",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Esquive Dérivante",
			'en-us': "Drifting Dodge",
			'es-es': "Escape a la Deriva",
			'it-it': "Schivata Fluttuante",
			'pt-br': "Evasão à Deriva",
			'de-de': "Ausweichgleiter"
		},

		effect: {
			'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'it-it': "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano.",
			'de-de': "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Zéphyr Fleuri",
			'en-us': "Flowery Zephyr",
			'es-es': "Céfiro Floral",
			'it-it': "Zefiro Floreale",
			'pt-br': "Zéfiro Florido",
			'de-de': "Blumiger Zephir"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715474,
				tcgplayer: 497413,
				cardtrader: 248298
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715474,
				tcgplayer: 497413,
				cardtrader: 248298
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	description: {
		'en-us': "Skiploom enthusiasts can apparently tell where a Skiploom was born by the scent drifting from the flower on the Pokémon's head.",
	},
}

export default card
