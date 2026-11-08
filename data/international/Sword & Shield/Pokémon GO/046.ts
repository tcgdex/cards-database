import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		'en-us': "Melmetal",
		'fr-fr': "Melmetal",
		'es-es': "Melmetal",
		'it-it': "Melmetal",
		'pt-br': "Melmetal",
		'de-de': "Melmetal"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 60
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Swinging Smash",
			'fr-fr': "Frappe Déchaînée",
			'es-es': "Golpe Oscilante",
			'it-it': "Oscillacolpo",
			'pt-br': "Pancada Giratória",
			'de-de': "Schmetterschwung"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño más por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano a mais para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665269,
				tcgplayer: 277016
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665269,
				tcgplayer: 277016
			}
		},
	],
}

export default card
