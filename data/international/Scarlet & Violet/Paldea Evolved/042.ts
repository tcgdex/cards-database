import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'fr-fr': "Magicarpe",
		'en-us': "Magikarp",
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
			'fr-fr': "Éclabousseur Expert",
			'en-us': "Expert Splasher",
			'es-es': "As del Chapoteo",
			'it-it': "Specialista di Splash",
			'pt-br': "Borrifador Experiente",
			'de-de': "Platschexperte"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 20 dégâts supplémentaires.",
			'en-us': "Flip 2 coins. If both of them are heads, this attack does 20 more damage.",
			'es-es': "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "10+"
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715516,
				tcgplayer: 497453,
				cardtrader: 248631
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715516,
				tcgplayer: 497453,
				cardtrader: 248631
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
	},
}

export default card
