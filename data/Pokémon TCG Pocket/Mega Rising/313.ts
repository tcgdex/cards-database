import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Persian",
		fr: "Persian"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [53],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss"
	},

	description: {
		en: "Although its fur has many admirers, it is tough to\nraise as a pet because of its fickle meanness.",
		fr: "Très apprécié pour sa fourrure, il est difficile à apprivoiser en raison de son caractère rétif."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shadow Claw",
			fr: "Griffe Ombre"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
			fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card