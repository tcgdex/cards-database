import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "As it did more and more with its tail, its hands\nbecame clumsy. It makes its nest high in\nthe treetops.",
		fr: "À force d'utiliser sa queue à tort et à travers, elle est devenue plus habile que ses mains. Il l'utilise pour faire son nid en haut des arbres."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Hit",
			fr: "Coup Double"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card