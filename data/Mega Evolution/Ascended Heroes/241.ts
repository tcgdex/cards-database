import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		'es-mx': "Medicham",
		de: "Meditalis",
		it: "Medicham",
		pt: "Medicham"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Seventh Kick",
			fr: "Septième Coup de Pied",
			es: "Séptima Patada",
			'es-mx': "Séptima Patada",
			de: "Siebter Kick",
			it: "Settimo Calcio",
			pt: "Sétimo Chute"
		},

		effect: {
			en: "If you don't have exactly 7 cards in your hand, this attack does nothing.",
			fr: "Si vous n'avez pas exactement 7 cartes dans votre main, cette attaque ne fait rien.",
			es: "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
			'es-mx': "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
			de: "Wenn du nicht genau 7 Karten auf deiner Hand hast, hat diese Attacke keine Auswirkungen.",
			it: "Se non hai esattamente sette carte in mano, questo attacco non ha effetto.",
			pt: "Se você não tiver exatamente 7 cartas na sua mão, este ataque não fará nada."
		},

		damage: 150
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676053,
		cardmarket: 869852
	}
}

export default card
