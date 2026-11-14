import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Emcee's Hype",
		fr: "Engouement de la MC",
		de: "MCs Hype",
		es: "Entusiasmo de Emcee",
		it: "Entusiasmo di Emcee",
		pt: "Hype da Emcee",
		'es-mx': "Emoción de Comentarista"
	},

	illustrator: "DOM",
	rarity: "Common",
	category: "Trainer",
	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726548,
				cardmarket: 918920
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726548,
				cardmarket: 918920
			}
		}
	],
}

export default card