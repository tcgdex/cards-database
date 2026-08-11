import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'en-us': "Cramorant",
		'fr-fr': "Nigosier",
		'es-es': "Cramorant",
		'it-it': "Cramorant",
		'pt-br': "Cramorant",
		'de-de': "Urgl"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Spit Shot",
			'fr-fr': "Tir Rejet",
			'es-es': "Lanzamiento Escupitajo",
			'it-it': "Colposputo",
			'pt-br': "Cusparada",
			'de-de': "Spuckschuss"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta todas las Energías de este Pokémon. Este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte todas as Energias deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It's an incredibly poor learner because it uses the bare minimum amount of energy for its brain. It focuses on battling instead.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769350,
				tcgplayer: 550220
			}
		},
	],

	illustrator: "Fujimoto Gold",

}

export default card