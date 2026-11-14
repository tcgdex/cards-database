import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Tate & Liza's Training",
		fr: "Entraînement de Lévy et Tatia",
		de: "Ben & Svenjas Training",
		es: "Entrenamiento de Vito y Leti",
		it: "Allenamento di Tell e Pat",
		pt: "Treinamento de Tate e Liza",
		'es-mx': "Entrenamiento de Vito y Leti"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726555,
				cardmarket: 918934
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726555,
				cardmarket: 918934
			}
		}
	],
}

export default card