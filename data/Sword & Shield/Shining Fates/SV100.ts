import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Rongrigou",
		en: "Greedent"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Rongourmand",
		en: "Skwovet"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Queue Cupide",
			en: "Greedy Tail"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			en: "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup de Queue",
			en: "Tail Smack"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card