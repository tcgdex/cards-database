import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'es-es': "Seaking",
		'es-mx': "Seaking",
		'de-de': "Golking",
		'it-it': "Seaking",
		'pt-br': "Seaking"
	},

	illustrator: "OKUBO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Goldeen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hydro Jet",
			'fr-fr': "Hydro-Jet",
			'es-es': "Hidropropulsión",
			'es-mx': "Hidrojet",
			'de-de': "Hydrostrahl",
			'it-it': "Getto Idrico",
			'pt-br': "Hidrojato"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon for each {W} Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie {W} attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival por cada Energía {W} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía {W} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia {W} assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia {W} ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895802,
				tcgplayer: 704771
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895802,
				tcgplayer: 704771
			}
		},
	],
}

export default card
