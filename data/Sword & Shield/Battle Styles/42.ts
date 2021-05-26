import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Jellicent",
		fr: "Moyade"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse"
	},

	attacks: [{
		name: {
			en: "Sediment Sink",
			fr: "Sédiment Visqueux"
		},

		effect: {
			en: "This attack does 10 damage for each Water Energy card in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte Énergie Water dans votre pile de défausse."
		},

		damage: "10×",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card