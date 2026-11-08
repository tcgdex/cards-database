import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		'en-us': "Shaymin V",
		'fr-fr': "Shaymin V",
		'es-es': "Shaymin V",
		'it-it': "Shaymin V",
		'pt-br': "Shaymin V",
		'de-de': "Shaymin V"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Revenge Blast",
			'fr-fr': "Explo-Vengeance",
			'es-es': "Estallido Venganza",
			'it-it': "Vendicabomba",
			'pt-br': "Raio de Vingança",
			'de-de': "Rachestoß"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Prize card your opponent has taken.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni carta Premio presa dal tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 40 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608437,
				tcgplayer: 263608
			}
		},
	],
}

export default card
