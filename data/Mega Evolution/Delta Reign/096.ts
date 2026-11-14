import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Legendary Summit",
		fr: "Sommet Légendaire",
		de: "Legendärer Gipfel",
		es: "Pico Legendario",
		it: "Cima Leggendaria",
		pt: "Pico Lendário",
		'es-mx': "Cenit Legendario"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726551,
				cardmarket: 918926
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726551,
				cardmarket: 918926
			}
		}
	],
}

export default card