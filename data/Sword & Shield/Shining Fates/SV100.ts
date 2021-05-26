import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Rongrigou"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Rongourmand"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Queue Cupide"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup de Queue"
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