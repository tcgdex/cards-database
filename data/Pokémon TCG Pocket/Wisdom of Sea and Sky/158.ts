import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Silver",
		fr: "Silver"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "Your opponent reveals their hand. Choose a Supporter card you find there and shuffle it into your opponent's deck.",
		fr: "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez et mélangez-la avec le deck de votre adversaire."
	},

	trainerType: "Supporter",
	boosters: ["ho-oh"]
}

export default card