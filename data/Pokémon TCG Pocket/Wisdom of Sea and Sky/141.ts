import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl",
		fr: "Noarfang"
	},

	illustrator: "Nisota Niso",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hoothoot"
	},

	description: {
		en: "Its eyes are specially developed to enable it to\nsee clearly even in murky darkness and minimal light.",
		fr: "Ses yeux à la structure particulière sont capables de voir comme en plein jour même quand il fait très sombre."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fly",
			fr: "Vol"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon."
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