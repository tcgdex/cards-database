import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		'es-mx': "Charcadet",
		de: "Knarbon",
		it: "Charcadet",
		pt: "Charcadet"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Best Punch",
			fr: "Coup de Poing Ultime",
			es: "Mejor Puñetazo",
			'es-mx': "Puño Supremo",
			de: "Bester Schlag",
			it: "Migliorpugno",
			pt: "Soco Absoluto"
		},

		cost: ["Fire"],

		damage: 40,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895799,
				tcgplayer: 704768
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895799,
				tcgplayer: 704768
			}
		},
	],
}

export default card
