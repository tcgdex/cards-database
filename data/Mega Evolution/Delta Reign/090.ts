import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Adventure Lantern",
		fr: "Lanterne Aventure"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Search your deck for a Basic {R} Energy card and a Basic {L} Energy card, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie {R} de base et une carte Énergie {L} de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
