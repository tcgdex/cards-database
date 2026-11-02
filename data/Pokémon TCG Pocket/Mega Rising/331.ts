import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Flame Patch",
		fr: "Fortifiant Flamboyant"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Crown",
	category: "Trainer",

	effect: {
		en: "Attach a {R} Energy from your discard pile to your Active {R} Pokémon.",
		fr: "Attachez une Énergie {R} de votre pile de défausse à votre Pokémon {R} sur le Poste Actif."
	},

	trainerType: "Item",
	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card