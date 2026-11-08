import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Focus Fist",
			'fr-fr': "Poing Concentré",
			'es-es': "Puño Infalible",
			'it-it': "Concentrapugno",
			'pt-br': "Punho Focalizado",
			'de-de': "Fokussierfaust"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "If one gets angry, all the others around it will get angry, so silence is a rare visitor in a troop of Mankey."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545446,
				tcgplayer: 234242
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545446,
				tcgplayer: 234242
			}
		},
	],
}

export default card
