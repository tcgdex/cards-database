import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [674],
	set: Set,

	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'de-de': "Pam-Pam",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'es-mx': "Pancham"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Focus Fist",
			'fr-fr': "Poing Concentré",
			'es-es': "Puño Infalible",
			'de-de': "Fokussierfaust",
			'it-it': "Concentrapugno",
			'pt-br': "Punho Focalizado",
			'es-mx': "Puño Enfocado"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Yuriko Akase",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817235,
				tcgplayer: 623510
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817235,
				tcgplayer: 623510
			}
		},
	],
}

export default card
