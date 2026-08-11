import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [1021],
	set: Set,

	name: {
		'en-us': "Raging Bolt",
		'fr-fr': "Ire-Foudre",
		'es-es': "Electrofuria",
		'it-it': "Furiatonante",
		'pt-br': "Raio Fúria",
		'de-de': "Furienblitz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Fighting"],

		name: {
			'en-us': "Thunderburst Storm",
			'fr-fr': "Tempête Foudroyante",
			'es-es': "Tormenta Atronadora",
			'it-it': "Tempesta di Tuoni",
			'pt-br': "Tempestade Trovejante",
			'de-de': "Gewittersturm"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Fighting", "Colorless"],

		name: {
			'en-us': "Dragon Headbutt",
			'fr-fr': "Dracoud'Boule",
			'es-es': "Cabezazo Dragón",
			'it-it': "Dragozuccata",
			'pt-br': "Cabeçada do Dragão",
			'de-de': "Drachen-Kopfnuss"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785965,
				tcgplayer: 567337
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785965,
				tcgplayer: 567337
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 786551,
			}
		},
	],

	illustrator: "kodama",

	thirdParty: {
		cardmarket: 785965
	}
}

export default card
