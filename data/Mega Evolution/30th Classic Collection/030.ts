import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	dexId: [129],

	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		'es-mx': "Magikarp"
	},

	illustrator: "Shinji Kanda",
	rarity: "None",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Expert Splasher",
			fr: "Éclabousseur Expert",
			de: "Platschexperte",
			es: "As del Chapoteo",
			it: "Specialista di Splash",
			pt: "Borrifador Experiente",
			'es-mx': "Estrella del Chapoteo"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 20 more damage.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 20 Schadenspunkte mehr zu.",
			es: "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 20 puntos de daño más.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, este ataque causará 20 pontos de dano a mais.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, este ataque hace 20 puntos de daño más."
		},

		damage: "10+",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907968,
				tcgplayer: 716210
			}
		}
	],
}

export default card