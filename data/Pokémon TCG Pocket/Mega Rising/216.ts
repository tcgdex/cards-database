import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Cover Fossil",
		fr: "Fossile Plaque"
	},

	illustrator: "Ryo Ueda",
	rarity: "One Diamond",
	category: "Trainer",

	effect: {
		en: "Play this card as if it were a 40-HP Basic {C} Pokémon.\nAt any time during your turn, you may discard this card from play.\nThis card can't retreat.",
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 40 PV. N'importe quand pendant votre tour, vous pouvez défausser cette carte du jeu. Cette carte ne peut pas battre en retraite."
	},

	trainerType: "Item",

	boosters: ["mega-gyarados"]
}

export default card