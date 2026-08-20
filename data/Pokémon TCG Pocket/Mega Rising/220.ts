import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lucky Mittens",
		fr: "Moufles Chance"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Whenever your opponent's Pokémon is Knocked Out by damage from an attack used by the Pokémon this card is attached to, draw a card.",
		fr: "Lorsque le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque du Pokémon auquel cette carte est attachée, piochez une carte."
	},

	trainerType: "Tool",

	boosters: ["mega-altaria"]
}

export default card