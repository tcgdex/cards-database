import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Legendary Trench",
		fr: "Fosse Légendaire",
		de: "Legendärer Graben",
		es: "Abismo Legendario",
		it: "Fossa Leggendaria",
		pt: "Abismo Lendário",
		'es-mx': "Abismo Legendario"
	},

	illustrator: "danciao",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 918928,
				tcgplayer: 726786
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 918928,
				tcgplayer: 726786
			}
		}
	],
}

export default card