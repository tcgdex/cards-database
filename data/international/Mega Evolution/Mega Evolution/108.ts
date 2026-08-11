import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'de-de': "Schlapor",
		'it-it': "Lopunny",
		'es-es': "Lopunny",
		'pt-br': "Lopunny",
		'es-mx': "Lopunny"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'de-de': "Haspiror",
		'it-it': "Buneary",
		'es-es': "Buneary",
		'pt-br': "Buneary",
		'es-mx': "Buneary"
	},
	stage: "Stage1",
	dexId: [428],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dashing Kick",
			'fr-fr': "Coup de Pied Fulgurant",
			'de-de': "Rasender Tritt",
			'it-it': "Calciolesto",
			'es-es': "Patada Veloz",
			'pt-br': "Chute Veloz",
			'es-mx': "Patada de Arranque"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Este ataque hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'de-de': "Drehtritt",
			'it-it': "Spiralcalcio",
			'es-es': "Patada Espiral",
			'pt-br': "Chute Espiral",
			'es-mx': "Patada Espiral"
		},

		damage: 60
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
				cardmarket: 851179,
				tcgplayer: 654447
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851179,
				tcgplayer: 654447
			}
		},
	],
}

export default card
