import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
		'es-es': "Ho-Oh",
		'it-it': "Ho-Oh",
		'pt-br': "Ho-Oh",
		'de-de': "Ho-Oh"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [{
		name: {
			'en-us': "Sacred Fire",
			'fr-fr': "Feu Sacré",
			'es-es': "Fuego Sagrado",
			'it-it': "Magifuoco",
			'pt-br': "Fogo Sagrado",
			'de-de': "Läuterfeuer"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'en-us': "Fire Blast",
			'fr-fr': "Déflagration",
			'es-es': "Llamarada",
			'it-it': "Fuocobomba",
			'pt-br': "Rajada de Fogo",
			'de-de': "Feuersturm"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		'en-us': "It will reveal itself before a pure-hearted Trainer by shining its bright, rainbow-colored wings."
	},

	dexId: [250],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576746,
				tcgplayer: 250300
			}
		},
	],
}

export default card
