import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [613],
	set: Set,

	name: {
		'fr-fr': "Polarhume",
		'en-us': "Cubchoo",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Coud'Pattes",
			'en-us': "Smash Kick",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Croche-Pied",
			'en-us': "Trip Over",
			'es-es': "Tropezón",
			'it-it': "Inciampare",
			'pt-br': "Tropeção",
			'de-de': "Stolperer"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Many of this species can be found along the shorelines of cold regions. If a Cubchoo lacks dangling snot, there's a chance it is sick.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725133,
				tcgplayer: 509798,
				cardtrader: 255613
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725133,
				tcgplayer: 509798,
				cardtrader: 255613
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
