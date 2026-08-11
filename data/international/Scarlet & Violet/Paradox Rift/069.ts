import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Whimsy Tackle",
			'fr-fr': "Charge Bizarre",
			'es-es': "Placaje Caprichoso",
			'it-it': "Capriccioazione",
			'pt-br': "Investida Fantástica",
			'de-de': "Launischer Tackle"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This selfish, attention-seeking Pokémon stores poison and electricity in two different sacs inside its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740561,
				tcgplayer: 523705,
				cardtrader: 265173
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740561,
				tcgplayer: 523705,
				cardtrader: 265173
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
