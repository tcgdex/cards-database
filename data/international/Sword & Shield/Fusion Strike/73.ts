import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [658],
	set: Set,

	name: {
		'en-us': "Greninja V",
		'fr-fr': "Amphinobi V",
		'es-es': "Greninja V",
		'it-it': "Greninja V",
		'pt-br': "Greninja V",
		'de-de': "Quajutsu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Water Drip",
			'fr-fr': "Goutte à Goutte",
			'de-de': "Spritzwasser",
			'es-es': "Goteo de Agua",
			'pt-br': "Gotejo",
			'it-it': "Gocciolacqua"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Dancing Shuriken",
			'fr-fr': "Shuriken Dansant",
			'de-de': "Tanzende Shuriken",
			'es-es': "Shuriken Danzante",
			'pt-br': "Estrela Ninja Dançante",
			'it-it': "Lame Danzanti"
		},

		damage: "80×",

		effect: {
			'en-us': "Flip 3 coins. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582207,
				tcgplayer: 253223
			}
		},
	],
}

export default card
