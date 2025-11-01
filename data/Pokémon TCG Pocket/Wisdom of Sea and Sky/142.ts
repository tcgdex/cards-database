import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "As it did more and more with its tail, its hands\nbecame clumsy. It makes its nest high in\nthe treetops.",
		fr: "À force d'utiliser sa queue à tort et à travers, elle est devenue plus habile que ses mains. Il l'utilise pour faire son nid en haut des arbres."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Imitate",
			fr: "Imiter"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw cards until you have the same number of cards in your hand as your opponent.",
			fr: "Piochez jusqu'à ce que vous obteniez le même nombre de cartes dans votre main que votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card