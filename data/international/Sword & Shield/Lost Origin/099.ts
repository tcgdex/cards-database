import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

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

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674111,
				tcgplayer: 283992
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674111,
				tcgplayer: 283992
			}
		},
	],
}

export default card
