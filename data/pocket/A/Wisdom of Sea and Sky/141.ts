import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Noctowl",
		'fr-fr': "Noarfang"
	},

	illustrator: "Nisota Niso",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [164],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Hoothoot"
	},

	description: {
		'en-us': "Its eyes are specially developed to enable it to\nsee clearly even in murky darkness and minimal light.",
		'fr-fr': "Ses yeux à la structure particulière sont capables de voir comme en plein jour même quand il fait très sombre."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fly",
			'fr-fr': "Vol"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card