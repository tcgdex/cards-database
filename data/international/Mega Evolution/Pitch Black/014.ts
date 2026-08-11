import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		'es-mx': "Seaking",
		de: "Golking",
		it: "Seaking",
		pt: "Seaking"
	},

	illustrator: "OKUBO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Goldeen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hydro Jet",
			fr: "Hydro-Jet",
			es: "Hidropropulsión",
			'es-mx': "Hidrojet",
			de: "Hydrostrahl",
			it: "Getto Idrico",
			pt: "Hidrojato"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each {W} Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie {W} attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival por cada Energía {W} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía {W} unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia {W} assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia {W} ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
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
