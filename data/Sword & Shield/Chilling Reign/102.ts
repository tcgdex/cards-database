import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Seviper",
		fr: "Séviper"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Strong Tail",
			fr: "Queue Puissante"
		},

		effect: {
			en: "If you played a Single Strike Supporter card from your hand during this turn, this attack does 90 more damage.",
			fr: "Si vous avez joué une carte Supporter Poing Final de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "90+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card