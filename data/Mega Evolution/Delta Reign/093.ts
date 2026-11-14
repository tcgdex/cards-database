import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Grisham",
		fr: "Cendro",
		de: "Gris",
		es: "Grisel",
		it: "Gris",
		pt: "Grisham",
		'es-mx': "Grisel"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726549,
				cardmarket: 918921
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726549,
				cardmarket: 918921
			}
		}
	],
}

export default card