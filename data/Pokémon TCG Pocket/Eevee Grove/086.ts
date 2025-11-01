import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Penny",
		fr: "Pania"
	},

	illustrator: "Susumu Maeya",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "Look at a random Supporter card that's not Penny from your opponent's deck and shuffle it back into their deck. Use the effect of that card as the effect of this card.",
		fr: "Regardez une des cartes Supporter du deck de votre adversaire au hasard qui n'est pas  et mélangez-la avec son deck. Utilisez son effet en tant qu'effet de cette carte."
	},

	trainerType: "Supporter"
}

export default card