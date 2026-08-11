import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [999],
	set: Set,

	name: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'es-es': "Gimmighoul",
		'it-it': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'de-de': "Gierspenst"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Continuous Coin Toss",
			'fr-fr': "Lancer de Pièce Continu",
			'es-es': "Lanzamiento Incesante de Monedas",
			'it-it': "Lanciomoneta Continuo",
			'pt-br': "Jogadas de Moeda Contínuas",
			'de-de': "Dauermünzwurf"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon was born inside a treasure chest about 1,500 years ago. It sucks the life-force out of scoundrels who try to steal the treasure.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740580,
				tcgplayer: 523754,
				cardtrader: 265199
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740580,
				tcgplayer: 523754,
				cardtrader: 265199
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
