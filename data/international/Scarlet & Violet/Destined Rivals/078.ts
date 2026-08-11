import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		'en-us': "Zeraora",
		'fr-fr': "Zeraora",
		'de-de': "Zeraora",
		'it-it': "Zeraora",
		'es-es': "Zeraora",
		'pt-br': "Zeraora",
		'es-mx': "Zeraora"
	},


	illustrator: "Ryuta Fuse",

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Thunder Raid",
			'fr-fr': "Raid Tonnerre",
			'de-de': "Donnernder Angriff",
			'it-it': "Raid Tonante",
			'es-es': "Incursión Atronadora",
			'pt-br': "Incursão de Trovão",
			'es-mx': "Redada Atronadora"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon, and this attack does 210 damage to 1 of your opponent's Benched Pokémon ex. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 210 dégâts à l'un des Pokémon-ex de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon-ex auf der Bank deines Gegners 210 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 210 danni a uno dei Pokémon-ex nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Descarta todas las Energías de este Pokémon, y este ataque hace 210 puntos de daño a uno de los Pokémon ex en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Descarte todas as Energias deste Pokémon, e este ataque causa 210 pontos de dano a 1 dos Pokémon ex no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 210 puntos de daño a 1 de los Pokémon ex en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
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

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825952,
				tcgplayer: 632888
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825952,
				tcgplayer: 632888
			}
		},
	],
}

export default card
