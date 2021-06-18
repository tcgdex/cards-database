import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Farfetch’d",
		fr: "Canarticho de Galar"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Puncture",
			fr: "Perforation"
		},

		effect: {
			en: "This attack’s damage isn’t affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card