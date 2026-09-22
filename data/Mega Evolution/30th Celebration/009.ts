import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur."
	},

	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix",
		es: "Vulpix",
		it: "Vulpix",
		'es-mx': "Vulpix"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Wild Kick",
			fr: "Coup Déchaîné",
			de: "Stürmischer Kick",
			es: "Patada Salvaje",
			it: "Calcio Selvaggio",
			'es-mx': "Patada Salvaje"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907615,
				tcgplayer: 716443
			}
		}
	],
}

export default card
