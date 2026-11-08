import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Rhyperior",
		'fr-fr': "Rhinastoc",
		'es-es': "Rhyperior",
		'it-it': "Rhyperior",
		'pt-br': "Rhyperior",
		'de-de': "Rihornior"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		464,
	],

	hp: 170,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hefty Cannon",
				'fr-fr': "Gros Canon",
				'es-es': "Cañón Contundente",
				'it-it': "Cannone Poderoso",
				'pt-br': "Canhão Robusto",
				'de-de': "Schwere Kanone"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
				'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 90,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Break Ground",
				'fr-fr': "Destructerre",
				'es-es': "Romper Suelo",
				'it-it': "Distruggiterra",
				'pt-br': "Quebra Chão",
				'de-de': "Boden gewinnen"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "From holes in its palms, it fires out Geodude. Its carapace can withstand volcanic eruptions.",
	},

	thirdParty: {
		cardmarket: 372386,
		tcgplayer: 189194
	}
}

export default card
