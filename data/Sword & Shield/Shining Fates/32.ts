import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Luxio",
		en: "Luxio"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Lixy",
		en: "Shinx"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Tombé de Haut",
			en: "Top Entry"
		},

		effect: {
			fr: "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc.",
			en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn’t full, before you put it into your hand, you may put it onto your Bench."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup de Pied Ravageur",
			en: "Zap Kick"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card