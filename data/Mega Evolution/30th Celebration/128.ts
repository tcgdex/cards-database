import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
		de: "Hyperball",
		es: "Ultra Ball",
		it: "Ultra Ball",
		'es-mx': "Ultrabola"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907735,
				tcgplayer: 716517
			}
		}
	],
}

export default card
