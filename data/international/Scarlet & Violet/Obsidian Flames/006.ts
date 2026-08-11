import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [283],
	set: Set,

	name: {
		'fr-fr': "Arakdo",
		'en-us': "Surskit",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Furie-Bond",
			'en-us': "Lunge",
			'es-es': "Plancha",
			'it-it': "Assalto",
			'pt-br': "Estocada",
			'de-de': "Anfallen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "They usually live on ponds, but after an evening shower, they may appear on puddles in towns.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725086,
				tcgplayer: 509658,
				cardtrader: 255566
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725086,
				tcgplayer: 509658,
				cardtrader: 255566
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
