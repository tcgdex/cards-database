import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		'fr-fr': "Lilliterelle",
		'en-us': "Nymble",
		'es-es': "Nymble",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'de-de': "Micrick"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

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
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715493,
				tcgplayer: 497431,
				cardtrader: 248317
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715493,
				tcgplayer: 497431,
				cardtrader: 248317
			}
		},
	],

	illustrator: "Sekio",

	description: {
		'en-us': "It has its third set of legs folded up. When it's in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
	},
}

export default card
