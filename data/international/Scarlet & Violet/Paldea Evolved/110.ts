import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		'fr-fr': "Embrylex",
		'en-us': "Larvitar",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Entaille Double",
			'en-us': "Double Stab",
			'es-es': "Doble Puñalada",
			'it-it': "Doppia Pugnalata",
			'pt-br': "Facada Dupla",
			'de-de': "Doppelstich"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715585,
				tcgplayer: 497525,
				cardtrader: 248756
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858714
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715585,
				tcgplayer: 497525,
				cardtrader: 248756
			}
		},
	],

	illustrator: "Haru Akasaka",

	description: {
		'en-us': "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
	},
}

export default card
