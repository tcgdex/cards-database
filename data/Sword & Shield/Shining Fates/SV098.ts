import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gouroutan",
		en: "Oranguru"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Sagesse du Primate",
			en: "Primate Wisdom"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck.",
			en: "Once during your turn, you may switch a card from your hand with the top card of your deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Assommer",
			en: "Whap Down"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card