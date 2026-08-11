import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flame Patch"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Crown",
	category: "Trainer",

	effect: {
		'en-us': "Attach a {R} Energy from your discard pile to your Active {R} Pokémon."
	},

	trainerType: "Item",
	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card