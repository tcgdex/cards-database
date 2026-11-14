import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	cameoDexIds: [226, 940],

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
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 918929,
				tcgplayer: 726552
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 918929,
				tcgplayer: 726552
			}
		}
	],
}

export default card