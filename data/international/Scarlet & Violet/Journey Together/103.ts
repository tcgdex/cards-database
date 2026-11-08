import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [599],
	set: Set,

	name: {
		'en-us': "N's Klink",
		'fr-fr': "Tic de N",
		'es-es': "Klink de N",
		'de-de': "Ns Klikk",
		'it-it': "Klink di N",
		'pt-br': "Klink do N",
		'es-mx': "Klink de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Spin",
			'fr-fr': "Double Tour",
			'es-es': "Doble Giro",
			'de-de': "Doppeldreher",
			'it-it': "Doppioturbo",
			'pt-br': "Giro Duplo",
			'es-mx': "Doble Giro"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
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
	retreat: 1,
	regulationMark: "I",
	illustrator: "Saboteri",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817255,
				tcgplayer: 623530
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817255,
				tcgplayer: 623530
			}
		},
	],
}

export default card
