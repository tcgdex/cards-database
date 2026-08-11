import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Rescue Scarf",
		fr: "Foulard de Sauvetage"
	},

	illustrator: "Ryo Ueda",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile.",
		fr: "Si le Pokémon auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, placez-le dans votre main plutôt que dans la pile de défausse."
	},

	trainerType: "Tool",
	boosters: ["ho-oh", "lugia"]
}

export default card