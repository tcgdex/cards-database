import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Jump",
			'fr-fr': "Bondissement",
			'es-es': "Salto",
			'it-it': "Salto",
			'pt-br': "Pular",
			'de-de': "Springen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 1 Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
	},

	thirdParty: {
        cardmarket: 702339,
        tcgplayer: 487888
    }
}

export default card