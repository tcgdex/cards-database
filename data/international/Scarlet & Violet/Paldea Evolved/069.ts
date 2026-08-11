import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'fr-fr': "Lixy",
		'en-us': "Shinx",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Coup Déchaîné",
			'en-us': "Wild Kick",
			'es-es': "Patada Salvaje",
			'it-it': "Calcio Selvaggio",
			'pt-br': "Chute sem Pontaria",
			'de-de': "Stürmischer Kick"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715544,
				tcgplayer: 497480,
				cardtrader: 248691
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715544,
				tcgplayer: 497480,
				cardtrader: 248691
			}
		},
	],

	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "The extension and contraction of its muscles generates electricity. It glows when in trouble.",
	},
}

export default card
