import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy"
	},

	attacks: [{
		name: {
			en: "Jumping Kick",
			fr: "Coup Sauté"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card