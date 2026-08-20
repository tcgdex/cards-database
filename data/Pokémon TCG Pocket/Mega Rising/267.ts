import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hala",
		fr: "Pectorius"
	},

	illustrator: "Teeziro",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		en: "During your opponent's next turn, if your Hariyama or Crabominable would be Knocked Out by damage from an attack, it is not Knocked Out and its remaining HP becomes 10.",
		fr: "Pendant le prochain tour de votre adversaire, si votre Hariyama ou Crabominable doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV."
	},

	trainerType: "Supporter",
	boosters: ["mega-blaziken"]
}

export default card