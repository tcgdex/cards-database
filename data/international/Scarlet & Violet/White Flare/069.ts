import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [598],
	set: Set,

	name: {
		'en-us': "Ferrothorn",
		'fr-fr': "Noacier",
		'de-de': "Tentantel",
		'it-it': "Ferrothorn",
		'pt-br': "Ferrothorn",
		'es-es': "Ferrothorn",
		'es-mx': "Ferrothorn"
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'de-de': "Kastadur",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'es-es': "Ferroseed",
		'es-mx': "Ferroseed"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Power Whip",
			'fr-fr': "Mégafouet",
			'de-de': "Blattgeißel",
			'it-it': "Vigorcolpo",
			'pt-br': "Chicote Poderoso",
			'es-es': "Latigazo",
			'es-mx': "Latigazo"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte Energie 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-es': "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'de-de': "Metallklaue",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'es-es': "Garra Metal",
			'es-mx': "Garra de Metal"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836029,
				tcgplayer: 642179
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836029,
				tcgplayer: 642179
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836619,
				tcgplayer: 642420
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836620,
				tcgplayer: 642348
			}
		},
	],
}

export default card
