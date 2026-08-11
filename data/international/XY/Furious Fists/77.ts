import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'de-de': "UHaFnir"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		715,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Echolocation",
				'fr-fr': "Écholocation",
				'es-es': "Ecolocación",
				'it-it': "Biosonar",
				'pt-br': "Ecolocalização",
				'de-de': "Echo-Ortung"
			},
			effect: {
				'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez les dégâts.",
				'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, evita ese daño.",
				'it-it': "Se questo Pokémon subisce danni da attacchi, lancia una moneta. Se esce testa, previeni quei danni.",
				'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, o dano será evitado.",
				'de-de': "Wirf 1 Münze, wenn diesem Pokémon durch Angriffe Schaden zugefügt wird. Bei \"Kopf\" verhindere diesen Schaden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Boomburst",
				'fr-fr': "Bang Sonique",
				'es-es': "Estruendo",
				'it-it': "Ondaboato",
				'pt-br': "Rajada Explosiva",
				'de-de': "Überschallknall"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a cada Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They fly around on moonless nights and attack careless prey. Nothing can beat them in a battle in the dark.",
	},

	thirdParty: {
		cardmarket: 281741,
		tcgplayer: 92257
	}
}

export default card
