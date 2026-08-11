import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [522],

	description: {
		en: "Its mane shines when it discharges electricity. They use their flashing manes to communicate with one another.",
		de: "Wenn es Strom entlädt, blitzt seine Mähne auf. Auf diese Weise kann es auch mit Artgenossen kommunizieren."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
			de: "Ruckzuckhieb"
		},

		damage: "10+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
		}
	}],

	name: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba"
	},

	rarity: "None",
	hp: 60,
	types: ["Lightning"],
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281795,
				tcgplayer: 83929
			}
		}
	]
}

export default card

