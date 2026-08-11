import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'es-mx': "Ambipom",
		'de-de': "Ambidiffel",
		'it-it': "Ambipom",
		'pt-br': "Ambipom"
	},

	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'es-mx': "Aipom",
		'de-de': "Griffel",
		'it-it': "Aipom",
		'pt-br': "Aipom",
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [424],
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'es-mx': "Bofetón",
			'de-de': "Hieb",
			'it-it': "Sberla",
			'pt-br': "Tapa"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dual Tail",
			'fr-fr': "Queue Double",
			'es-es': "Doble Cola",
			'es-mx': "Cola Dual",
			'de-de': "Doppelschweif",
			'it-it': "Coda Duplice",
			'pt-br': "Cauda Dupla"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon, and this attack does 60 damage to each of 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige à 2 des Pokémon de votre adversaire 60 dégâts chacun. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta 2 Energías de este Pokémon, y este ataque hace 60 puntos de daño a cada uno de los 2 Pokémon de tu rival que elijas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 2 Energías de este Pokémon, y este ataque hace 60 puntos de daño a cada uno de 2 Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 2 Pokémon deines Gegners jeweils 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta due Energie da questo Pokémon e questo attacco infligge 60 danni ciascuno a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias deste Pokémon, e este ataque causa 60 pontos de dano a cada um de 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "They live on large trees. They are said to communicate by connecting their tails to those of others.",
	},

	illustrator: "hncl",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857654,
				tcgplayer: 662127
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857654,
				tcgplayer: 662127,
				cardtrader: 356865
			}
		},
	],
}

export default card
