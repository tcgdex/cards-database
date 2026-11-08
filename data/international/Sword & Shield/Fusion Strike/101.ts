import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [738],
	set: Set,

	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt",
		'de-de': "Donarion"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		'en-us': "If it carries a Charjabug to use as a spare battery, a flying Vikavolt can rapidly fire high-powered beams of electricity."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 70
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Electro Blaster",
			'fr-fr': "Explosif Électrique",
			'de-de': "Elektro-Blaster",
			'es-es': "Electroexplosión",
			'pt-br': "Disparador Elétrico",
			'it-it': "Esplosione Elettrica"
		},

		effect: {
			'en-us': "Discard 2 {L} Energy from this Pokémon. This attack does 200 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies {L} de ce Pokémon. Cette attaque inflige 200 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Lege 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 200 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Descarta 2 Energías {L} de este Pokémon. Este ataque hace 200 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Descarte 2 Energias {L} deste Pokémon. Este ataque causa 200 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Scarta due Energie {L} da questo Pokémon. Questo attacco infligge 200 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582494,
				tcgplayer: 253257
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582494,
				tcgplayer: 253257
			}
		},
	],
}

export default card
